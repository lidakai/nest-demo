import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAddDto } from './user.types';
import { Param } from '../Common/param';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('add')
  async addUser(@Param() user: UserAddDto) {
    return this.userService.addUser(user);
  }

  @Get('list')
  async listUsers(
    @Param('pageNo') pageNo = 1,
    @Param('pageSize') pageSize = 20,
  ) {
    return this.userService.listUsers(pageNo, pageSize);
  }
}
