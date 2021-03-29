import { Injectable } from '@nestjs/common';
import { SubscriptionService } from 'src/common/subscription.service';
import { ProcessesArgs } from './dto/processes.args';
import { Process } from './models/process';
import * as fs from 'fs';
import * as xml2js from 'xml2js';
import * as Path from 'path';

@Injectable()
export class ProcessesService {

  constructor(private readonly subscriptionService: SubscriptionService) { }

  async find(processesArgs: ProcessesArgs): Promise<Process> {
    const process = this.xmlToJSON(processesArgs.path);
    return process;
  }

  async xmlToJSON(file: string): Promise<Process | null> {
    try {
      if (fs.existsSync(file)) {
        const data = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
        let process = {} as Process;
        if (data) {
          const parser = new xml2js.Parser({ explicitArray: false, attrkey: 'attributes' });
          await parser.parseString(data, (err, result) => {
            process = result;
            // console.log(result.ProcessConfiguration.GeneralSettings.SystemSettings[0]);
          })
        }
        return process;
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  }

}
