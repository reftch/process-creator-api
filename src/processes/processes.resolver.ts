import { Args, Query, Resolver } from '@nestjs/graphql';
import { Process } from './models/process';
import { ProcessesArgs } from './dto/processes.args';
import { ProcessesService } from './processes.service';

@Resolver(of => Process)
export class ProcessesResolver {
  
  constructor(private readonly processesService: ProcessesService) {}

  @Query(returns => Process, {name: 'process'})
  async process(@Args() processesArgs: ProcessesArgs): Promise<Process> {
    return await this.processesService.find(processesArgs);
  }


}
