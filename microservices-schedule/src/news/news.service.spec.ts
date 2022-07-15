import { Test, TestingModule } from '@nestjs/testing';
import { NewsService } from './news.service';
import { ServicesModule } from '../common/services/services.module';
import { IHit } from '../../../api-gateway/dist/common/interfaces/news.interface';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsService],
      imports: [ServicesModule],
    }).compile();

    service = module.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
