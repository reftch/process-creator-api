import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class ProcessesArgs {

  @Field(type => String)
  path = '';
  
}
