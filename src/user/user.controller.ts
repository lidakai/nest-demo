import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAddDto } from './user.types';
import { Param } from '../common/param';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  async addUser(@Body() user: UserAddDto, @Param('pageNo') pageNo = 1) {
    console.log(pageNo, user, 'user');
    return this.userService.addUser({ ...user, pageNo });
  }

  @Get('list')
  async listUsers(
    @Param('pageNo') pageNo = 1,
    @Param('pageSize') pageSize = 20,
  ) {
    console.log(pageNo, pageSize, 'list');
    return this.userService.listUsers(pageNo, pageSize);
  }
}
