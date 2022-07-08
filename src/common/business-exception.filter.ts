import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { BusinessException } from './business.exception';
import { ApiException } from './api.exception';
import * as dayjs from 'dayjs';

/**
 * 业务异常统一处理
 */
@Catch(HttpException)
export class BusinessExceptionFilter implements ExceptionFilter {
  catch(exception: BusinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if (exception instanceof ApiException) {
      response.json({
        code: exception.getErrorCode(),
        message: exception.getErrorMessage(),
        date: dayjs().format(),
      });
    } else {
      response.json({
        code: exception.code,
        message: exception.message,
      });
    }

    console.error(
      // tslint:disable-line
      'BusinessException code:%s message:%s \n%s',
      exception.code,
      exception.message,
      exception.data,
    );
  }
}
