import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BusinessExceptionFilter } from './common/business-exception.filter';
import { TransformInterceptor } from './common/result.interceptor';
import { WsAdapter } from './gateway/socket.adapter';
import { ValidationPipe } from './common/params.validator';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import 'reflect-metadata';
import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // import locale

async function bootstrap() {
  dayjs.locale('zh-cn'); // use locale

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: new NestLogger(),
  });

  app.useGlobalPipes(new ValidationPipe()); //表单校验
  // 注册为全局res
  app.useGlobalInterceptors(new TransformInterceptor());
  // 注册为全局filter
  app.useGlobalFilters(new BusinessExceptionFilter());

  app.useWebSocketAdapter(new WsAdapter(app)); // 使用我们的适配器

  await app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
bootstrap();
