
export interface IFolder {
  name: string;
  path: string;
  parent: string;
  created?: string;
  files: IFolderFile[];
  projectDescription?: IProjectDescription;
}

export interface IFolderFile {
  name: string;
  path: string;
  created?: string;
  isDirectory: boolean;
}

export interface IProjectDescription {
  name: string;
  comment?: string;
  projects?: string;
  buildSpec?: string;
  natures?: string;
}

