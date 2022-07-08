import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAddDto } from './user.types';
import { Param } from '../common/param';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  async addUser(@Body() user: UserAddDto, @Param('pageNo') pageNo = 1) {
    return this.userService.addUser({ ...user, pageNo });
  }

  @Get('list')
  async listUsers(
    @Param('pageNo') pageNo = 1,
    @Param('pageSize') pageSize = 20,
  ) {
    const _pageNo = typeof pageNo === 'string' ? parseInt(pageNo) : pageNo;
    const _pageSize =
      typeof pageSize === 'string' ? parseInt(pageSize) : pageSize;
    return this.userService.listUsers(_pageNo, _pageSize);
  }
}
