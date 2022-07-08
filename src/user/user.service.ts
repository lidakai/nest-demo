import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiErrorCode } from 'src/common/api-error-code.enum';
import { ApiException } from 'src/common/api.exception';
import { UserAddDto } from './user.types';

@Injectable()
export class UserService {
  listUsers(pageNo = 1, pageSize = 10): string[] {
    return Array(pageSize)
      .fill(0)
      .map((_, i) => `user-${pageNo}-${i}-${Math.random() * 100}`);
  }

  addUser(user: any): UserAddDto {
    console.log(user, 'user');
    // return 'hello world';
    if (user && user.name) {
      return user;
    }
    throw new ApiException(
      '用户名不存在',
      ApiErrorCode.USER_ID_INVALID,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
