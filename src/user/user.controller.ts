import { Controller, Get, Header, Headers, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAddDto } from './user.types';
import { Param } from '../common/param';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  async addUser(@Param() user: UserAddDto, @Headers('token') header?: string) {
    return this.userService.addUser(Object.assign(user, { token: header }));
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
