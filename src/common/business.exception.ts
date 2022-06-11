/**
 * 业务异常
 */
export class BusinessException {
  constructor(
    public readonly code: number,
    public readonly message: string,
    public readonly data?: string,
  ) {}
}
/**
 * 参数异常
 */
export class ParamException extends BusinessException {
  constructor(message = '参数错误', data?: string) {
    super(400, message, data);
  }
}

/**
 * 权限异常
 */
export class AuthException extends BusinessException {
  constructor(message = '无权访问', data?: string) {
    super(403, message, data);
  }
}
