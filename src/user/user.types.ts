/**
 * 用户持久化对象
 */
export interface UserPo {
  id: number;
  name: string; // 姓名
  gender: Gender; // 性别
  desc: string; // 介绍
}
/**
 * 新建用户传输对象
 */
export interface UserAddDto {
  firstName: string;
  lastName: string;
  age: number;
}
/**
 * 性别
 */
export enum Gender {
  Unknown,
  Male,
  Female,
}
