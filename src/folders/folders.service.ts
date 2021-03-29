import { Injectable, NotFoundException } from '@nestjs/common';
import { FoldersArgs } from './dto/folders.args';
import { Folder, FolderFile } from './models/folder.model';
import { ProjectDescription } from './models/projectDescription.model';
import { SubscriptionService } from 'src/common/subscription.service';
import * as fs from 'fs';
import * as xml2js from 'xml2js';
import * as Path from 'path';
import { NewFolderInput } from './dto/new-folder.input';

@Injectable()
export class FoldersService {

  private readonly PROJECT_FILE = '/.project';

  constructor(private readonly subscriptionService: SubscriptionService) {}

  async find(foldersArgs: FoldersArgs): Promise<Folder> {
    const folder = {} as Folder;
    let path = foldersArgs.path;
    if (!path || !fs.existsSync(path)) {
      path = (await this.getUserHome()).path;
    }

    try {
      const _stats = fs.statSync(path);
      folder.created =_stats.birthtime.toUTCString();
    } catch (e) {
      throw new NotFoundException(`Path [${path}] was not found.`);
    }

    folder.files = fs.readdirSync(path, { withFileTypes: true })
      .map(f => {
        const _path = path === '/' ? `/${f.name}` : `${path}/${f.name}`;
        let _created = '';
        if (f.isFile() || f.isDirectory()) {
          const _stats = fs.statSync(_path);
          _created = _stats.birthtime.toUTCString();
        }
        return {name: f.name, path: _path, created: _created, isDirectory: f.isDirectory()};
      })
      .sort(this.fileComparator);
    
    // folder.files.sort(this.fileComparator);
    folder.name = Path.basename(path);
    folder.parent = Path.dirname(path);
    folder.path = path;

    let projectDescription = await this.isProjectFolder(path);
    if (!projectDescription) {
      projectDescription = { name: ''};
    }
    this.subscriptionService.subscription.publish('projectFound',  { projectFound: projectDescription });

    return folder;
  }

  async create(newFolderData: NewFolderInput) {
    //
    return null;
  }

  async remove(name: string) {
    //
    return false;
  }

  async getUserHome(): Promise<Folder> {
    const folder = {} as Folder;
    folder.name = 'HOME';
    folder.path = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
    folder.parent = Path.dirname(folder.path);
    return folder;
  }

  /**
   * Returns project description by pasing .project file.
   * 
   * @param path Path to the project folder
   */
  async getProjectName(file: string): Promise<ProjectDescription | null> {
    try {
      const data = fs.readFileSync(file, {encoding:'utf8', flag:'r'});
      let project = null;
      if (data) {
        const parser = new xml2js.Parser({explicitArray : false});
        await parser.parseString(data, (err, result) => {
          project = result.projectDescription;
        })
      }
      return project;
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  /**
   * 
   * @param path 
   */
  async isProjectFolder(path: string): Promise<ProjectDescription | null> {
    if (fs.existsSync(`${path}${this.PROJECT_FILE}`)) {
      return await this.getProjectName(`${path}${this.PROJECT_FILE}`);
    } else {
      const parent = Path.dirname(path);
      if (parent === path) {
        return null;
      } else {
        return this.isProjectFolder(parent);
      }
    }
  }

  private fileComparator(a: FolderFile, b: FolderFile) {
    if (a.isDirectory && !b.isDirectory) {
      return -1;
    } 
    if (!a.isDirectory && b.isDirectory) {
      return 1;
    } 
    return a.name.normalize().localeCompare(b.name.normalize());
  }
    
}
