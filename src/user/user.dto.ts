import { IsInt, IsString, Min, Max, Length } from 'class-validator';

export class UserAddDto {
  @IsString({ message: '参数firstName要求是整数!' })
  @Length(1, 30, { message: '参数firstName的长度范围是1,30' })
  firstName: string;

  @IsString({ message: '参数lastName要求是整数!' })
  @Length(1, 30, { message: '参数lastName的长度范围是1,30' })
  lastName: string;

  @IsInt({ message: '参数age要求是整数!' })
  @Min(1, { message: '年龄不允许低于0' })
  @Max(1000, { message: '年龄不允许大于1000' })
  age: number;
}
