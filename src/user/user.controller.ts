import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAddDto } from './user.types';
import { Param } from '../common/param';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  async addUser(@Body() user: UserAddDto, @Query() pageNo: number) {
    console.log(pageNo, user, 'user');
    return this.userService.addUser({ ...user, pageNo });
  }

  @Get('list')
  async listUsers(
    @Query() { pageNo, pageSize }: { pageNo: number; pageSize: number },
  ) {
    console.log(pageNo, pageSize, 'list');
    return this.userService.listUsers(pageNo, pageSize);
  }
}
