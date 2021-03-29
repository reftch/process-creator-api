import { Field, ObjectType } from '@nestjs/graphql';
import { IFolder, IFolderFile } from 'common';

@ObjectType()
export class Folder implements IFolder {
  @Field()
  name: string;

  @Field({ nullable: true })
  path: string;

  @Field({ nullable: true })
  parent: string;

  @Field({ nullable: true })
  created: string;

  @Field(type => [FolderFile])
  files: FolderFile[];

}

@ObjectType()
export class FolderFile implements IFolderFile {
  @Field()
  name: string;

  @Field({ nullable: true })
  path: string;

  @Field({ nullable: true })
  created: string;

  @Field()
  isDirectory: boolean;
}

