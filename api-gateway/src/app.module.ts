import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';
import { ResponseManagerService } from './common/response-manager/response-manager.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    NewsModule,
  ],
  providers: [ResponseManagerService],
})
export class AppModule {}
