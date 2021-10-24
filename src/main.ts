import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.useGlobalPipes(new ValidationPipe(getValidationOptions()));

  const config = buildSwaggerConfig();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  if (!process.env.DISABLE_AUTH || process.env.DISABLE_AUTH === 'false') {
    app.use(authenticationMiddleware);
  }
  await app.listen(3000);
}

function buildSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Vercel API')
    .addSecurity('token', { type: 'apiKey', name: 'token', in: 'header' })
    .build();
}
bootstrap();
