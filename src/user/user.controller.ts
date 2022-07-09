import { Controller, Get, Header, Headers, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAddDto } from './user.types';
import { Param } from '../common/param';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  async addUser(@Param() user: UserAddDto, @Headers('token') token?: string) {
    return this.userService.addUser(Object.assign(user, { token }));
  }

  @Get('list')
  async listUsers(
    @Param('pageNo') pageNo = 1,
    @Param('pageSize') pageSize = 20,
    @Headers('token') token?: string,
  ) {
    const _pageNo = typeof pageNo === 'string' ? parseInt(pageNo) : pageNo;
    const _pageSize =
      typeof pageSize === 'string' ? parseInt(pageSize) : pageSize;
    console.log(token, 'list - token');
    return this.userService.listUsers(_pageNo, _pageSize);
  }
}
