import { Injectable } from '@nestjs/common';
import { UserAddDto } from './user.types';

@Injectable()
export class UserService {
  listUsers(pageNo = 1, pageSize = 10): string[] {
    return Array(10)
      .fill(0)
      .map((_, i) => `user-${i}-${Math.random() * 100}`);
  }

  addUser(user: UserAddDto): string {
    return 'Hello World!';
  }
}
