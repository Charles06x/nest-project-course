import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apiMajorVersion = 1
  const apiPrefix = `api/v${apiMajorVersion}`
  app.setGlobalPrefix(apiPrefix);

  const config = new DocumentBuilder()
    .setTitle('Nestjs Learning')
    .setVersion(`${apiMajorVersion}.0`)
    .addTag('nest-learning')
    .build()

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(`${apiPrefix}/docs`, app, document)

  await app.listen(3000);
}
bootstrap();
