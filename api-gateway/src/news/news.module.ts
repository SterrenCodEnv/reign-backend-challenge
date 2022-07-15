import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { ClientProxyReignBackendChallenge } from '../common/proxy/client-proxy';
import { ResponseManagerService } from '../common/response-manager/response-manager.service';

@Module({
  controllers: [NewsController],
  providers: [ClientProxyReignBackendChallenge, ResponseManagerService],
})
export class NewsModule {}
