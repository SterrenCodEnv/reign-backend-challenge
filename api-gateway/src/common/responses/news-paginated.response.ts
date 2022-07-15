import { IHit } from '../interfaces/news.interface';
import { IApiResponse } from '../interfaces/app-response.interface';

export class NewsResponse implements IApiResponse<IHit[]> {
  data: {
    news: IHit[];
  };
}
