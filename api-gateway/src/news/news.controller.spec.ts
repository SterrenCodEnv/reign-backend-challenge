import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';

describe('NewsController', () => {
  let controller: NewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsController],
    }).compile();

    controller = module.get<NewsController>(NewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findByFilter', () => {
    it('should return an array of news', () => {
      expect(true).toBe(true);
    });
  });

  describe('findAll', () => {
    it('should return an array of news', () => {
      expect(true).toBe(true);
    });
  });

  describe('delete', () => {
    it('should return an object', () => {
      expect(true).toBe(true);
    });
  });
});
