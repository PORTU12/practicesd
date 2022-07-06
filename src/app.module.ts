import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { logger, /*LoggerMiddleware*/ } from './middleware/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './Exceptions/all-exceptions.filters';
//import { HttpExceptionFilter } from './Exceptions/http-exceptions.filters';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, {
    provide: APP_FILTER,
    // le seul moyen de gérer l'enregistrement personnalisé du fournisseur
    useClass: AllExceptionsFilter//HttpExceptionFilter,
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(CatsController);
    /*consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes(CatsController);*/

    /*consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats'); */

    /*consumer
      .apply(LoggerMiddleware)
      .forRoutes({path: 'cats', method: RequestMethod.GET});*/
  }
}
