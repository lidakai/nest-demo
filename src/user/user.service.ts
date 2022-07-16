import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiErrorCode } from 'src/constants/api-error-code.enum';
import { ApiException } from 'src/common/api.exception';
import { UserAdd } from './user.types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entitys/user';
import * as dayjs from 'dayjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(pageNo: number, pageSize: number) {
    return this.usersRepository
      .createQueryBuilder('user')
      .orderBy('user.createTime', 'DESC')
      .skip((pageNo - 1) * pageSize)
      .take(pageSize)
      .getMany();
  }

  find(firstName: string): Promise<UserAdd> {
    return this.usersRepository.findOne({ where: { firstName } });
  }

  async addUser(user: UserAdd): Promise<UserAdd> {
    let msg = '参数异常';
    if (user && user.firstName) {
      const findResult = await this.find(user.firstName);
      if (!findResult) {
        const result = await this.usersRepository.save({
          ...user,
          createTime: dayjs().format(),
        });
        return result;
      }
      msg = 'firstName 已存在';
    }
    throw new ApiException(
      msg,
      ApiErrorCode.USER_ID_INVALID,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
