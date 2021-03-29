import { Field, InputType } from '@nestjs/graphql';
// import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewFolderInput {

  @Field()
  // @IsOptional()
  // @Length(1, 1024)
  path: string;

}
