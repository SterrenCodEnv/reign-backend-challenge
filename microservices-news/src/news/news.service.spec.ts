import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/common/services/prisma/prisma.service';
import { NewsRepositoryService } from 'src/common/services/repositories/news.repository.service';
import { NewsService } from './news.service';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsService, PrismaService, NewsRepositoryService],
    }).compile();

    service = module.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
