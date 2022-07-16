import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAdd } from './user.types';
import { UserAddDto } from './user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  async addUser(@Body() user: UserAddDto): Promise<UserAdd> {
    return await this.userService.addUser(user);
  }

  @Get('list')
  async listUsers(
    @Query('pageNo') pageNo = 1,
    @Query('pageSize') pageSize = 2,
  ) {
    const result = await this.userService.findAll(pageNo, pageSize);
    return result;
  }
}
