// Core
import { NestFactory } from '@nestjs/core';

// Other
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
  });
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
