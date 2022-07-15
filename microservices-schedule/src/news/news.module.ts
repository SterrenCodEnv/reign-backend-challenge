import { Module, OnModuleInit } from '@nestjs/common';
import { NewsService } from './news.service';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { ShnService } from '../common/services/shn/shn.service';
import { NewsRepositoryService } from '../common/services/repositories/news.repository.service';
import { ServicesModule } from 'src/common/services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [NewsService, PrismaService, ShnService, NewsRepositoryService],
})
export class NewsModule implements OnModuleInit {
  constructor(private readonly newsService: NewsService) {}
  async onModuleInit() {
    await this.newsService.getNewsCron();
  }
}
