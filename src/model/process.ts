
export interface IProcess {
  ProcessConfiguration: IProcessConfiguration;
}

export interface IProcessConfiguration {
  // StandardProcessing: IStandardProcessing;
  GeneralSettings: IGeneralSettings;
  // _xmlns: string;
  // "_xmlns:xi": string;
  // "_xmlns:xsi": string;
  // _Name: string;
  // _CustomerID: string;
  // "_xsi:schemaLocation": string;
  // _CustomerInitial: string;
}

export interface IGeneralSettings {
  SystemSettings: ISystemSetting[];
  // Definitions: IDefinitions;
  // include: IInclude;
}

export interface IDefinitions {
  DocumentTypeDefinitionList: IDocumentTypeDefinitionList;
  FieldNamesList: IFieldNamesList;
  ApplicationDefinitionList: IApplicationDefinitionList;
  FrankingDefinitionList: string;
  ExternalProgramDefinitionList: string;
  JavaCommandDefinitionList: string;
  BundlingShipmentsDefinitionList: IBundlingShipmentsDefinitionList;
  PaperTypeDefinitionList: string;
  ScriptCommandDefinitionList: IScriptCommandDefinitionList;
  SQLQueryDefinitionList: string;
  TriggerDefinitionList: string;
  EnvelopeDefinitionList: string;
  DirectoryDefinitionList: IDirectoryDefinitionList;
  ProductClassListDefinitionCollection: IProductClassListDefinitionCollection;
  ProductClassDefinitionCollection: IProductClassDefinitionCollection;
  SendMailDefinitions: string;
  HandlerSequenceDefinitions: IHandlerSequenceDefinitions;
  HandlerDefinitions: IHandlerDefinitions;
  NewOutputChannelList: string;
  NewSubChannelLists: string;
  NewSubChannels: string;
  OutputSpoolList: IOutputSpoolList;
  PrintSpoolHandlerList: string;
  SplitSpoolHandlerList: string;
  FastSpoolHandlerList: IFastSpoolHandlerList;
  SeparatorSheetList: string;
  SchedulerEventList: ISchedulerEventList;
  OrderAndDataEnrichmentDefinitionList: IOrderAndDataEnrichmentDefinitionList;
  DocumentOrderInMailPieceColumnListDefinitionList: IDocumentOrderInMailPieceColumnListDefinitionList;
  MailPieceOrderInJobColumnListDefinitionList: IMailPieceOrderInJobColumnListDefinitionList;
  EPostBriefDefinitionList: string;
  AdditionalSheetDefinitions: string;
}

export interface IApplicationDefinitionList {
  ApplicationDefinition: IApplicationDefinition[];
}

export interface IApplicationDefinition {
  Command: ICommand;
  _Id: string;
}

export interface ICommand {
  ScriptCommand: string;
}

export interface IBundlingShipmentsDefinitionList {
  BundlingShipmentsDefinition: IBundlingShipmentsDefinition;
}

export interface IBundlingShipmentsDefinition {
  BundlingColumnList: IBundlingColumnList;
  OrderAndDataEnrichmentReference: string;
  _Id: string;
}

export interface IBundlingColumnList {
  ColumnName: IColumnName;
}

export interface IColumnName {
  DocAttribute: string;
}

export interface IDirectoryDefinitionList {
  DirectoryDefinition: IDirectoryDefinition[];
}

export interface IDirectoryDefinition {
  FilePath: string;
  _Id: string;
  _Prefix?: string;
}

export interface IDocumentOrderInMailPieceColumnListDefinitionList {
  DocumentOrderInMailPieceColumnListDefinition: IDocumentOrderInMailPieceColumnListDefinition;
}

export interface IDocumentOrderInMailPieceColumnListDefinition {
  DocumentOrderInMailPieceFieldNames: IDocumentOrderInMailPieceFieldName[];
  _Id: string;
}

export interface IDocumentOrderInMailPieceFieldName {
  DocumentOrderInMailPieceFieldName: string;
}

export interface IDocumentTypeDefinitionList {
  DocumentTypeDefinition: IDocumentTypeDefinition[];
}

export interface IDocumentTypeDefinition {
  PaperType: string;
  SimplexDuplex: string;
  Tray: string;
  Channel: string;
  _Id: string;
}

export interface IFastSpoolHandlerList {
  FastSpoolHandler: IFastSpoolHandler;
}

export interface IFastSpoolHandler {
  FastSpoolHandlerTrayExpression: IFastSpoolHandlerTrayExpression;
  _Id: string;
  "_xsi:type": string;
}

export interface IFastSpoolHandlerTrayExpression {
  FastSpoolHandlerOutputTray: string;
}

export interface IFieldNamesList {
  DocumentAttribute: IDocumentAttribute[];
}

export interface IDocumentAttribute {
  _Indexed: string;
  _FieldName: string;
}

export interface IHandlerDefinitions {
  HandlerDefinition: IHandlerDefinition[];
}

export interface IHandlerDefinition {
  Selector: string;
  RelaxedJobIdSelectorMapping: string;
  StopOnError: string;
  _Id: string;
  "_xsi:type": string;
  ProductClassListReference?: string;
  NewShipmentConfiguration?: INewShipmentConfiguration;
  VarpoolArrayName?: string;
  FastOutputSpoolReference?: string;
  OrderAndDataEnrichmentReference?: string;
  OutputApplication?: string;
  NonBlockingParallelProcessing?: string;
  ReprintApplicationSelection?: string;
}

export interface INewShipmentConfiguration {
  BundlingShipments: string;
}

export interface IHandlerSequenceDefinitions {
  HandlerSequenceDefinition: IHandlerSequenceDefinition[];
}

export interface IHandlerSequenceDefinition {
  ReferenceEntry: IReferenceEntry[];
  _Id: string;
}

export interface IReferenceEntry {
  HandlerReference: string;
  Bypass?: string;
  StopOnError?: string;
}

export interface IMailPieceOrderInJobColumnListDefinitionList {
  MailPieceOrderInJobColumnListDefinition: IMailPieceOrderInJobColumnListDefinition;
}

export interface IMailPieceOrderInJobColumnListDefinition {
  MailPieceOrderDefinedByUser: IMailPieceOrderDefinedByUser;
  _Id: string;
}

export interface IMailPieceOrderDefinedByUser {
  MailPieceOrderInJobFieldNames: IMailPieceOrderInJobFieldNames;
}

export interface IMailPieceOrderInJobFieldNames {
  MailPieceOrderInJobFieldName: string;
  MailPieceOrderInJobDescending: string;
}

export interface IOrderAndDataEnrichmentDefinitionList {
  OrderAndDataEnrichmentDefinition: IOrderAndDataEnrichmentDefinition;
}

export interface IOrderAndDataEnrichmentDefinition {
  DocumentOrderInMailPieceColumnListReference: string;
  MailPieceOrderInJobColumnListReference: string;
  _Id: string;
}

export interface IOutputSpoolList {
  FastSpool: IFastSpool;
}

export interface IFastSpool {
  OutputFormat: string;
  OutputDirectoryReference: string;
  TempDirectoryReference: string;
  ErrorDirectoryReference: string;
  SuccessDirectoryReference: string;
  OutputFileExpression: string;
  FastSpoolHandlerReferenceEntry: IFastSpoolHandlerReferenceEntry;
  FastSpoolAdvancedSettings: IFastSpoolAdvancedSettings;
  _Id: string;
}

export interface IFastSpoolAdvancedSettings {
  MffProfiles: string;
  NumberOfParallelExecutions: string;
  ParallelizingCounterModuloOpperand: string;
  KeepOpenCount: string;
  RelaxedMode: string;
  BinaryCopyMode: string;
  SelfContained: string;
  SeparateOverlays: string;
  MergeFontsFlag: string;
  TestRunMode: string;
}

export interface IFastSpoolHandlerReferenceEntry {
  FastSpoolHandlerReference: string;
}

export interface IProductClassDefinitionCollection {
  ProductClassDefinition: IProductClassDefinition[];
}

export interface IProductClassDefinition {
  Constraints: IConstraints;
  Properties: IProperties;
  _Id: string;
}

export interface IConstraints {
  MaximumWeight: string;
  MaximumNumberofSheets: string;
  MaxThickness: string;
}

export interface IProperties {
  Envelope: string;
  PostalProduct?: string;
  DialogpostEasy: string;
}

export interface IProductClassListDefinitionCollection {
  ProductClassListDefinition: IProductClassListDefinition;
}

export interface IProductClassListDefinition {
  ProductClass: string[];
  _Id: string;
}

export interface ISchedulerEventList {
  FileImportTaskList: IFileImportTaskList;
}

export interface IFileImportTaskList {
  FileImportTask: IFileImportTask;
}

export interface IFileImportTask {
  InputFileDirectory: string;
  FileSearchMask: string;
  Trigger: string;
  Application: string;
  _Id: string;
}

export interface IScriptCommandDefinitionList {
  ScriptCommandDefinition: IScriptCommandDefinition[];
}

export interface IScriptCommandDefinition {
  ScriptDirectory: string;
  ScriptName: string;
  ScriptParameterList: IScriptParameterList;
  ScriptLanguage: string;
  _Id: string;
}

export interface IScriptParameterList {
  property: IProperty[];
}

export interface IProperty {
  Name: string;
  Content: string;
}

export interface ISystemSetting {
  Deployment_URI: string;
  ProgDir: string;
  DataDir: string;
  attributes: IAttributes
}

export interface IAttributes {
  SystemName: string;
}

export interface IInclude {
  _href: string;
}

export interface IStandardProcessing {
  ProcessHandlerSequence: IProcessHandlerSequence;
  InputChannelList: IInputChannelList;
}

export interface IInputChannelList {
  StandardImportList: IStandardImportList;
}

export interface IStandardImportList {
  StandardImport: IStandardImport;
}

export interface IStandardImport {
  TriggerImport: ITriggerImport;
  ImmediateProcessing: string;
  DataAcquisition: IDataAcquisition;
  AdvancedSettings_SI: IAdvancedSettingsSI;
  _Id: string;
}

export interface IAdvancedSettingsSI {
  CSVEncoding: string;
  OutFiletype: string;
  StandardImportSelfContained: string;
  MffProfiles: string;
  NoActivation: string;
  numberOfParallelExecutions: string;
  createWebServiceResult: string;
  checkcountry: string;
  checkzip: string;
  importmode: string;
  IgnoreFalseDocs: string;
  IgnoreFalseFiles: string;
  ImmediateProcessingIncludesAllIMPORTJobs: string;
  relaxed: string;
  BinaryCopyMode: string;
  MergeFontsFlag: string;
}

export interface IDataAcquisition {
  Assignment: IAssignment[];
  DocumentLimits: IDocumentLimits;
  ExampleFile: string;
}

export interface IAssignment {
  Inactivate: string;
  FieldName: string;
  RectangleCapturing?: IRectangleCapturing;
  Ifvalueismissing: string;
  OnFalseCondition: string;
  JavaScriptEval?: IJavaScriptEval;
  COND_Parity?: ICONDParity;
  DefaultValue?: string;
  FixedValue?: IFixedValue;
  Condition?: string;
  AddressCapturing?: IAddressCapturing;
}

export interface IAddressCapturing {
  X: string;
  Y: string;
  Width: string;
  Height: string;
  AddressCapturingMode: string;
  NumberOfSenderLines: string;
  AddressCapturingMinSpace: string;
  SenderCountryISOCODE: string;
  ReceipientDefaultCountryName: string;
}

export interface ICONDParity {
  ComparisonFieldName: string;
  ComparisonValue: string;
}

export interface IFixedValue {
  Content: string;
}

export interface IJavaScriptEval {
  Code: string;
}

export interface IRectangleCapturing {
  X: string;
  Y: string;
  Width: string;
  Height: string;
}

export interface IDocumentLimits {
  Condition: string;
  Type: string;
}

export interface ITriggerImport {
  Trigger: string;
  InputFileSearchPattern: string;
}

export interface IProcessHandlerSequence {
  StandardHandlerSequence: string;
}

