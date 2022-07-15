import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { PrismaService } from '../common/services/prisma/prisma.service';
import { NewsRepositoryService } from '../common/services/repositories/news.repository.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, PrismaService, NewsRepositoryService],
})
export class NewsModule {}
