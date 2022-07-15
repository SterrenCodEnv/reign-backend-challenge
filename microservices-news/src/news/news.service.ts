import { Injectable, HttpStatus, Logger } from '@nestjs/common';
import { IHit } from '../common/interfaces/news.interface';
import { FilterNewsDTO } from '../common/dto/filter.news.dto';
import { NewsRepositoryService } from '../common/services/repositories/news.repository.service';
import * as moment from 'moment';

@Injectable()
export class NewsService {
  constructor(private readonly newsRepositoryService: NewsRepositoryService) {}

  private readonly logger = new Logger(NewsService.name);

  async getAllNews(page: number): Promise<IHit[] | any> {
    try {
      const startMoment = moment().format('HH:mm:ss');
      this.logger.debug(
        `🗞️ Getting all news from page: ${page} started at ${startMoment}`,
      );
      const data = await this.newsRepositoryService.getAllNews(page);
      data.forEach((item) => {
        item.highlightResult = JSON.parse(item.highlightResult);
      });
      const endMoment = moment().format('HH:mm:ss');
      const diferenceMoment =
        moment(endMoment, 'HH:mm:ss').diff(moment(startMoment, 'HH:mm:ss')) /
        1000;

      this.logger.debug(
        ` 🗞️ Getting all news from page: ${page} ended at ${endMoment} in ${diferenceMoment} seconds`,
      );
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async filterNews(filterNewsDTO: FilterNewsDTO): Promise<IHit[] | any> {
    try {
      const startMoment = moment().format('HH:mm:ss');
      this.logger.debug(`🔎 Get filtered news started at ${startMoment}`);

      const query = {
        take: 20,
        where: {
          deleted_at: null,
        },
      };

      if (filterNewsDTO.title !== undefined) {
        query.where['title'] = filterNewsDTO.title;
      }

      if (filterNewsDTO.author !== undefined) {
        query.where['author'] = filterNewsDTO.author;
      }

      if (filterNewsDTO.tags !== undefined) {
        query.where['tags'] = {
          hasEvery: filterNewsDTO.tags,
        };
      }
      const data = await this.newsRepositoryService.getFilteredNews(query);
      data.forEach((item) => {
        item.highlightResult = JSON.parse(item.highlightResult);
      });

      const endMoment = moment().format('HH:mm:ss');
      const diferenceMoment =
        moment(endMoment, 'HH:mm:ss').diff(moment(startMoment, 'HH:mm:ss')) /
        1000;
      this.logger.debug(
        ` 🔎 Get filtered news ended at ${endMoment} in ${diferenceMoment} seconds`,
      );

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteNews(id: string): Promise<any> {
    try {
      const startMoment = moment().format('HH:mm:ss');
      this.logger.debug(
        `🗑️ Delete new with id ${id} started at ${startMoment}`,
      );

      const data = await this.newsRepositoryService.deleteNew(id);
      if (data === null) {
        this.logger.error(`🗑️ New with id ${id} not found in database`);

        return {
          status: HttpStatus.NOT_FOUND,
          message: 'News not found',
        };
      }

      const endMoment = moment().format('HH:mm:ss');
      const diferenceMoment =
        moment(endMoment, 'HH:mm:ss').diff(moment(startMoment, 'HH:mm:ss')) /
        1000;
      this.logger.debug(
        ` 🗑️ Delete new with id ${id} ended at ${endMoment} in ${diferenceMoment} seconds`,
      );

      return {
        status: HttpStatus.OK,
        message: `Deleted new with id: ${data}`,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
