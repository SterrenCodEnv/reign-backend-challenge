import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Hit } from '../../entities/hit.entity';

@Injectable()
export class NewsRepositoryService {
  constructor(private prismaService: PrismaService) {}

  async insertNews(news: Hit[]) {
    const { count } = await this.prismaService.hit.createMany({
      data: news,
      skipDuplicates: true,
    });
    return count;
  }
}
