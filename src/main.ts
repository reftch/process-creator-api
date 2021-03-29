import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';

//const keyFileName = path.join(process.cwd(), 'certificates/server.key');
//const certFileName = path.join(process.cwd(), 'certificates/server.crt');

async function bootstrap() {
//  const httpsOptions = {
//    key: fs.readFileSync(keyFileName),
//    cert: fs.readFileSync(certFileName),
//  }
  const app = await NestFactory.create(AppModule, {
//    httpsOptions,
  });

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
