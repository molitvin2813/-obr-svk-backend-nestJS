import { Module } from '@nestjs/common';
import { ArticleCategorysService } from './article-categorys.service';
import { ArticleCategorysController } from './article-categorys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ArticleCategorys} from '../entity/article-categorys'
@Module({
  imports:[TypeOrmModule.forFeature([ArticleCategorys])],
  providers: [ArticleCategorysService],
  controllers: [ArticleCategorysController]
})
export class ArticleCategorysModule {}
