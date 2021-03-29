import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class FoldersArgs {

  @Field(type => String)
  path = '';
  
}
