// 参数校验

import {
  Injectable,
  PipeTransform,
  ArgumentMetadata,
  ValidationError,
  HttpStatus,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ApiException } from 'src/common/api.exception';
import { ApiErrorCode } from 'src/constants/api-error-code.enum';
/**
 * 这是一个全局的参数验证管道，基于class-transformer
 * 如果失败，则会抛出HttpException
 * 在main.ts的nestApp要将它设为全局的
 */

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    const errorList: string[] = [];
    const errObjList: ValidationError[] = [...errors];

    do {
      const e = errObjList.shift();
      if (!e) {
        break;
      }
      if (e.constraints) {
        for (const item in e.constraints) {
          errorList.push(e.constraints[item]);
        }
      }
      if (e.children) {
        errObjList.push(...e.children);
      }
    } while (true);
    if (errorList.length > 0) {
      const [first] = errorList;
      throw new ApiException(
        '请求参数校验错误:' + first,
        ApiErrorCode.VALIDATOR_ERROR,
      );
    }
    return object;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private toValidate(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
