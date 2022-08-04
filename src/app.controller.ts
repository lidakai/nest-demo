import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
const DATA = [
  {
    column1: '北京',
    column2: 87.2,
    column3: '超预期',
    isSticked: false,
    isSelected: false,
  },
  {
    column1: '上海',
    column2: 80.5,
    column3: '达标',
    isSticked: false,
    isSelected: false,
  },
  {
    column1: '杭州',
    column2: 72.3,
    column3: '达标',
    isSticked: false,
    isSelected: false,
  },
  {
    column1: '重庆',
    column2: 65.5,
    column3: '未达标',
    isSticked: false,
    isSelected: false,
  },
  {
    column1: '成都',
    column2: 58.4,
    column3: '未达标',
    isSticked: false,
    isSelected: false,
  },
  {
    column1: '厦门',
    column2: 52.5,
    column3: '未达标',
    isSticked: false,
    isSelected: false,
  },
  {
    column1: '云南',
    column2: 40.2,
    column3: '未达标',
    isSticked: false,
    isSelected: false,
  },
];
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  count = 0;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  test(): any[] {
    this.count += 1;
    if (this.count > 7) {
      this.count = 1;
    }
    return DATA.filter((d, i) => i < this.count);
  }

  @Get('/randomNumber')
  randomNumber(): number {
    return Math.random() * 1000;
  }

  @Get('/favicon.ico')
  getIco() {
    return 'http://oss.wanfengblog.com/FuUTgnwXeVkXKVmzRSSr6MM94kRz';
  }
}
