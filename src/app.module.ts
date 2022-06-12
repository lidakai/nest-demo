import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/logging.interceptor';
import { TimeoutInterceptor } from './common/timeout.interceptor';
import { UserModule } from './user/user.module';
import { WsStartGateway } from './ws/ws.gateway';

@Module({
  imports: [UserModule],
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
