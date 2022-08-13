import { Module } from '@nestjs/common';
import { DouyinController } from './douyin.controller';
import { DouyinService } from './douyin.service';

@Module({
  imports: [],
  controllers: [DouyinController],
  providers: [DouyinService],
})
export class DouyinModule {}
