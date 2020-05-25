import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    // LoggerModule,
  LoggerModule.forRoot(), // dynamic module
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: 'DI',
    useValue: 'how DI works?'
  }],
})
export class AppModule {}
