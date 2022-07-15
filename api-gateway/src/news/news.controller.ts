import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { NewsMSG } from 'src/common/constants';
import { ClientProxyReignBackendChallenge } from '../common/proxy/client-proxy';
import { FilterNewsDTO } from '../common/dto/filter.news.dto';
import { NewsResponse } from '../common/responses/news-paginated.response';
import { ResponseManagerService } from '../common/response-manager/response-manager.service';

@ApiTags('News')
@Controller('api/v1/news')
export class NewsController {
  constructor(
    private readonly clientProxy: ClientProxyReignBackendChallenge,
    private responseManagerSvc: ResponseManagerService,
  ) {}
  private _clientProxyNews = this.clientProxy.clientProxyNews();

  @Get('filter')
  findByFilter(@Query() data?: FilterNewsDTO): Observable<NewsResponse> {
    try {
      return this._clientProxyNews.send(NewsMSG.FILTER, {
        data,
      });
    } catch (err) {
      throw this.responseManagerSvc.checkError(err);
    }
  }

  @Get('')
  @ApiQuery({ name: 'page', type: Number, required: false })
  findAll(@Query('page') page?: number): Observable<NewsResponse> {
    try {
      const nroPage = Number(page) || 0;
      return this._clientProxyNews.send(NewsMSG.GET_ALL, nroPage);
    } catch (err) {
      throw this.responseManagerSvc.checkError(err);
    }
  }

  @Patch(':id')
  delete(@Param('id') id: string): Observable<object> {
    try {
      return this._clientProxyNews.send(NewsMSG.DELETE, id);
    } catch (err) {
      throw this.responseManagerSvc.checkError(err);
    }
  }
}
