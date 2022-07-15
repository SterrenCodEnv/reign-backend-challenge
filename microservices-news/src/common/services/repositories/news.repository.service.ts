import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Hit } from '../../entities/hit.entity';
import * as moment from 'moment';

@Injectable()
export class NewsRepositoryService {
  constructor(private prismaService: PrismaService) {}

  async getAllNews(page: number): Promise<Hit[] | any> {
    return this.prismaService.hit.findMany({
      where: {
        deleted_at: null,
      },
      orderBy: {
        created_at: 'desc',
      },
      take: 5,
      skip: page * 5,
    });
  }

  async getFilteredNews(query: any): Promise<Hit[] | any> {
    return this.prismaService.hit.findMany(query);
  }

  async deleteNew(id: string): Promise<string> {
    const hit = await this.prismaService.hit.findFirst({
      where: {
        objectID: id,
        deleted_at: null,
      },
    });

    if (!hit) {
      return null;
    }

    const { objectID } = await this.prismaService.hit.update({
      where: {
        objectID: id,
      },
      select: {
        objectID: true,
      },
      data: {
        deleted_at: moment().toISOString(),
      },
    });

    return objectID;
  }
}
