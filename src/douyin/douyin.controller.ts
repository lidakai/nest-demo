import { Body, Controller, Post } from '@nestjs/common';
import { DouyinService } from './douyin.service';
import { douyinData } from '../utils/douyin';
import axios from 'axios';

@Controller('api/douyin')
export class DouyinController {
  constructor(private readonly douyinService: DouyinService) {}

  @Post('/getDouyinData')
  async getDouyinData(@Body() { link }: { link: string }) {
    const url = await axios.get(link).then(function (response) {
      return response.request.res.responseUrl;
    });
    return await douyinData(url);
  }
}
