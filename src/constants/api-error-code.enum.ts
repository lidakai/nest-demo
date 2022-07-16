// 自定义状态码

export enum ApiErrorCode {
  TIMEOUT = -1, // 系统繁忙
  SUCCESS = 200, // 成功
  VALIDATOR_ERROR = -4, //表单校验失败

  USER_ID_INVALID = 10001, // 用户id无效
}
