import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './cats/Pipes/validation.pipe';
import { HttpExceptionFilter } from './Exceptions/http-exceptions.filters';
import { logger } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)
  app.useGlobalFilters(new HttpExceptionFilter)
  app.use(logger);
  logger: console;
  await app.listen(3000);
}
bootstrap();
