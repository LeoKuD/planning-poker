import * as fs from 'fs';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  // eslint-disable-next-line class-methods-use-this
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response: Response = context.getResponse<Response>();
    const request: Request = context.getRequest<Request>();

    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      code: status,
      timestamp: new Date().toLocaleDateString(),
      path: request.url,
      method: request.method,
      message:
        status !== HttpStatus.INTERNAL_SERVER_ERROR
          ? exception.message || null
          : 'Internal server error',
    };

    Logger.error(
      `${request.method} ${request.url}`,
      exception.stack,
      'HttpExceptionFilter',
    );

    fs.appendFile('./logs/errors.log', `${errorResponse.timestamp} ${status} ${errorResponse.message} ${request.method} ${request.url}\n`, () => {});

    response.status(status).json(errorResponse);
  }
}
