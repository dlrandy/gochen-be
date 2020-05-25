import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { Logger } from './logger/logger.decorator';

@Injectable()
export class AppService {

  // constructor(private readonly logger: LoggerService){
  //   this.logger.setPrefix('AppService');
  // }

  constructor(@Logger('AppService') private logger: LoggerService){}

  getHello(): string {
    this.logger.log('hello world');
    return 'Hello World!';
  }
}
