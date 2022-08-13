import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/logging.interceptor';
import { TimeoutInterceptor } from './common/timeout.interceptor';
import { WsStartGateway } from './socket/ws.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DouyinModule } from './douyin/douyin.module';
import { base } from '../config/ormconfig';
@Module({
  imports: [UserModule, TypeOrmModule.forRoot(base), DouyinModule],
  controllers: [AppController],
  providers: [
    AppService,
    WsStartGateway,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    TimeoutInterceptor,
  ],
})
export class AppModule {}
