import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BusinessExceptionFilter } from './common/business-exception.filter';
import { TransformInterceptor } from './common/result.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 注册为全局filter
  app.useGlobalFilters(new BusinessExceptionFilter());
  // 注册为全局res
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}
bootstrap();
