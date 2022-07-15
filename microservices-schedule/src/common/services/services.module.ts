import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ShnService } from './shn/shn.service';
import { NewsRepositoryService } from './repositories/news.repository.service';

@Module({
  providers: [PrismaService, ShnService, NewsRepositoryService],
  exports: [PrismaService, ShnService, NewsRepositoryService],
})
export class ServicesModule {}
