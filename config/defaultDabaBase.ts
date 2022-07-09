import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../src/user/user.entity';

export const database: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '124.223.51.137',
  port: 3306,
  username: 'root',
  password: 'Pw#1234#',
  database: 'nest_test',
  synchronize: false,
  entities: [User], // 'dist/**/*.entity{ .ts,.js}'
};
