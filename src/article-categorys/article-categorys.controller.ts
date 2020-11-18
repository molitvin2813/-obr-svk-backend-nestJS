import { 
  Controller, 
  Post, 
  Body, 
  Get, 
  Put, 
  Delete,
  Param
} from '@nestjs/common';

import {ArticleCategorysService} from './article-categorys.service'

@Controller('article-categorys')
export class ArticleCategorysController {

  constructor(private service: ArticleCategorysService) { }

  @Get(':id')
  get(@Param() params) {
      return this.service.getArticleCategory(params.id);
  }

  @Get()
  getAllCategorys() {
    return this.service.getArticleCategorys();
  }
}
