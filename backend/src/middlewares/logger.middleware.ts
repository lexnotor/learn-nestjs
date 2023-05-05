import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import * as morgan from 'morgan';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use = morgan('dev');
}
