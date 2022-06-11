import { Injectable } from '@nestjs/common';
import { UserAddDto } from './user.types';

@Injectable()
export class UserService {
  listUsers(pageNo: number, pageSize: number): string {
    return 'Hello World!';
  }

  addUser(user: UserAddDto): string {
    return 'Hello World!';
  }
}
