import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiErrorCode } from 'src/Common/api-error-code.enum';
import { ApiException } from 'src/Common/api.exception';
import { UserAddDto } from './user.types';

@Injectable()
export class UserService {
  listUsers(pageNo = 1, pageSize = 10): string[] {
    console.log(pageNo, pageSize);
    return Array(10)
      .fill(0)
      .map((_, i) => `user-${i}-${Math.random() * 100}`);
  }

  addUser(user: UserAddDto): string {
    console.log(user);
    // return 'hello world';
    throw new ApiException(
      '用户ID无效123',
      ApiErrorCode.USER_ID_INVALID,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
