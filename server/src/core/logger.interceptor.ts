import * as fs from 'fs';
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import type { Request } from 'express';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    const dateLog = new Date().toLocaleDateString();
    const {
      url, method, body, query,
    } = req;
    const request = JSON.stringify(body);
    const params = JSON.stringify(query);
    const mesForFile = `status: ${statusCode} method: ${method} url: ${url} body: ${request} query_params: ${params}`;

    fs.appendFile('./logs/all_logs.log', `${dateLog} ${mesForFile}\n`, () => {});

    Logger.log(
      `${mesForFile}`,
      'LoggerInterceptor',
    );

    return next.handle();
  }
}
