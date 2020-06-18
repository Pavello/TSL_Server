import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.enableCors();
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
  .setTitle('Tennis League API')
  .setDescription('API for tennis league')
  .setVersion('1.0')
  .addTag('tsl')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => console.log('app is running on port: ' + port));
}
bootstrap();
