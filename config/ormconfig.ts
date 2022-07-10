import { UserEntity } from '../src/entitys/user.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const base: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '124.223.51.137',
  port: 3306,
  username: 'root',
  password: 'Pw#1234#',
  database: 'nest_test',
  entities: [UserEntity],
  synchronize: true,
};
