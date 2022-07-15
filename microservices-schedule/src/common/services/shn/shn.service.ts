import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IHit } from '../../interfaces/news.interface';

@Injectable()
export class ShnService {
  private newsUrl = `https://hn.algolia.com/api/v1/search_by_date?query=nodejs`;

  async getAllNews(): Promise<IHit[]> {
    try {
      const numberPages = (await axios.get(this.newsUrl)).data.nbPages;
      const pagesForFirstLoop = Math.round(numberPages / 2);
      const pagesForSecondLoop = numberPages - pagesForFirstLoop;
      const promisesFirstLoop = [];
      const promisesSecondLoop = [];

      for (let i = 0; i < pagesForFirstLoop; i++) {
        const news = this.getNewsPerPage(i);
        promisesFirstLoop.push(news);
      }

      const newsFirstLoop = await Promise.all(promisesFirstLoop);

      for (let i = pagesForSecondLoop; i < numberPages; i++) {
        const news = this.getNewsPerPage(i);
        promisesSecondLoop.push(news);
      }

      const newsSecondLoop = await Promise.all(promisesSecondLoop);

      return newsFirstLoop.flat().concat(newsSecondLoop.flat());
    } catch (error) {
      throw new Error(error);
    }
  }

  async getNewsPerPage(page = 1): Promise<IHit[]> {
    try {
      return (await axios.get(this.newsUrl + `&page=${page}`)).data.hits;
    } catch (error) {
      throw new Error(error);
    }
  }
}
