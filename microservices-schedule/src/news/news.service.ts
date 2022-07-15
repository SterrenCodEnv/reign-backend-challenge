import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ShnService } from '../common/services/shn/shn.service';
import * as moment from 'moment';
import { NewsRepositoryService } from '../common/services/repositories/news.repository.service';
import { IHit } from 'src/common/interfaces/news.interface';
import { Hit } from '@prisma/client';

@Injectable()
export class NewsService {
  constructor(
    private readonly shnService: ShnService,
    private readonly newsRepositoryService: NewsRepositoryService,
  ) {}

  private readonly logger = new Logger(NewsService.name);

  @Cron(CronExpression.EVERY_HOUR)
  async getNewsCron() {
    const startMoment = moment().format('HH:mm:ss');
    this.logger.debug(` ⏳️ News backup schedule started at ${startMoment}`);

    const news: IHit[] = await this.shnService.getAllNews();
    const data = news.map((item) => {
      const hit: Hit = {
        objectID: item.objectID,
        created_at: item.created_at,
        deleted_at: null,
        title: item.title,
        url: item.url,
        author: item.author,
        points: item.points,
        story_text: item.story_text,
        comment_text: item.comment_text,
        num_comments: item.num_comments,
        story_id: item.story_id,
        story_title: item.story_title,
        story_url: item.story_url,
        parent_id: item.parent_id,
        created_at_i: item.created_at_i,
        tags: item._tags,
        highlightResult: JSON.stringify(item._highlightResult),
      };
      return hit;
    });

    const result = await this.newsRepositoryService.insertNews(data);

    const endMoment = moment().format('HH:mm:ss');
    const diferenceMoment =
      moment(endMoment, 'HH:mm:ss').diff(moment(startMoment, 'HH:mm:ss')) /
      1000;

    this.logger.debug(
      ` ⌛ News backup schedule ended at ${endMoment} with ${result} in ${diferenceMoment} seconds`,
    );
  }
}
