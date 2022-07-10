import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiErrorCode } from 'src/common/api-error-code.enum';
import { ApiException } from 'src/common/api.exception';
import { UserAddDto } from './user.types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entitys/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(pageNo: string, pageSize: string): Promise<UserEntity[]> {
    console.log(pageNo, pageSize, '123');
    return this.usersRepository.find();
  }

  find(firstName: string): Promise<UserAddDto> {
    return this.usersRepository.findOne({ where: { firstName } });
  }

  async addUser(user: UserAddDto): Promise<UserAddDto> {
    if (user && user.firstName) {
      const findResult = await this.find(user.firstName);
      if (!findResult) {
        const result = await this.usersRepository.save(user);
        return result;
      }
    }
    throw new ApiException(
      'firstName 已存在',
      ApiErrorCode.USER_ID_INVALID,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
