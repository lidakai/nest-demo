import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BusinessExceptionFilter } from './common/business-exception.filter';
import { TransformInterceptor } from './common/result.interceptor';
import { WsAdapter } from './gateway/ws.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 注册为全局filter
  app.useGlobalFilters(new BusinessExceptionFilter());
  // 注册为全局res
  app.useGlobalInterceptors(new TransformInterceptor());

  app.useWebSocketAdapter(new WsAdapter(app)); // 使用我们的适配器

  await app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
bootstrap();
