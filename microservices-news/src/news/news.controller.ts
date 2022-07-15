import { Controller } from '@nestjs/common';
import { NewsService } from './news.service';
import { FilterNewsDataDto } from '../common/dto/filter.news.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NewsMSG } from '../common/constants';

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @MessagePattern(NewsMSG.GET_ALL)
  async getAllNews(@Payload() page: number): Promise<any> {
    return this.newsService.getAllNews(page);
  }

  @MessagePattern(NewsMSG.FILTER)
  async filterNews(
    @Payload() filterNewsDataDto: FilterNewsDataDto,
  ): Promise<any> {
    const { data } = filterNewsDataDto;
    return this.newsService.filterNews(data);
  }

  @MessagePattern(NewsMSG.DELETE)
  async deleteNew(@Payload() id: string): Promise<any> {
    return this.newsService.deleteNews(id);
  }
}
