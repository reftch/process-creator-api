import { Field, ObjectType } from '@nestjs/graphql';
import { IProjectDescription } from 'common';

@ObjectType()
export class ProjectDescription implements IProjectDescription {
  
  @Field()
  name: string;
  
  @Field({nullable: true})
  comment?: string;
  
  @Field({nullable: true})
  projects?: string;
  
  @Field({nullable: true})
  buildSpec?: string;
  
  @Field({nullable: true})
  natures?: string;

}
