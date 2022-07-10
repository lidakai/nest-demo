import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entitys/user';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // 这里需要申明，就可以使用User这个实体了
  controllers: [UserController],
  providers: [UserService],
  exports: [TypeOrmModule],
})
export class UserModule {}
