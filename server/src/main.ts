// Core
import { NestFactory } from '@nestjs/core';

// Other
import { AppModule } from './app.module';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
  });
  app.setGlobalPrefix('api');
  await app.listen(process.env.SERVER_PORT || 8080);
}
bootstrap();
