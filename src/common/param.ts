import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Param = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const param = { ...request.query, ...request.body, ...request.param };
    return data ? param[data] : param;
  },
);
