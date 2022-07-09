import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiErrorCode } from 'src/common/api-error-code.enum';
import { ApiException } from 'src/common/api.exception';
import { UserAddDto } from './user.types';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
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
