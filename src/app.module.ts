import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { FoldersModule } from './folders/folders.module';
import { ProcessesModule } from './processes/processes.module';

@Module({
  imports: [
    ServeStaticModule.forRoot(
    {
      rootPath: join(__dirname, '..', 'webapps/creator'),
      renderPath: '/creator',
    },
    {
      rootPath: join(__dirname, '..', 'webapps/ui'),
      renderPath: '/ui',
    },
    ),
    FoldersModule,
    ProcessesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      subscriptions: {
        keepAlive: 3000,
      }
    }),
  ],
})
export class AppModule {}
