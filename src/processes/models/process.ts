
import { Field, ObjectType } from '@nestjs/graphql';
import { IProcess } from 'common';
import { IAttributes, IGeneralSettings, IProcessConfiguration, ISystemSetting } from 'common/src/model/process';

@ObjectType()
export class Process implements IProcess {

  @Field(type => ProcessConfigurationImpl)
  ProcessConfiguration: IProcessConfiguration;
}


@ObjectType()
export class ProcessConfigurationImpl implements IProcessConfiguration {

  @Field(type => GeneralSettingsImpl)
  GeneralSettings: IGeneralSettings;
}

@ObjectType()
export class GeneralSettingsImpl implements IGeneralSettings {

  @Field(type => [SystemSettingImpl])
  SystemSettings: ISystemSetting[];
}

@ObjectType()
export class SystemSettingImpl implements ISystemSetting {
 
  @Field()
  Deployment_URI: string;
  @Field()
  ProgDir: string;
  @Field()
  DataDir: string;
  @Field(type => Attributes)
  attributes: IAttributes;

}

@ObjectType()
export class Attributes implements IAttributes {
  @Field()
  SystemName: string;
}
