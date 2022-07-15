import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { NewsRepositoryService } from './repositories/news.repository.service';

@Module({
  providers: [PrismaService, NewsRepositoryService],
  exports: [PrismaService, NewsRepositoryService],
})
export class ServicesModule {}
