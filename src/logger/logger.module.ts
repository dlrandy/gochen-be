import { Module, DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { createLoggerProviders } from './logger.providers'
import { prefixesForLoggers } from './logger.decorator';

// const loggerProviders = createLoggerProviders();

// @Module({
//   providers: [LoggerService, ...loggerProviders],
//   exports: [LoggerService], ...loggerProviders,
// })
// export class LoggerModule {}

export class LoggerModule {
  static forRoot(): DynamicModule {
    const prefixedLoggerProviders = createLoggerProviders();
    return {
      module: LoggerModule,
      providers: [LoggerService, ...prefixedLoggerProviders],
      exports: [LoggerService, ...prefixedLoggerProviders]
    }
  }
}