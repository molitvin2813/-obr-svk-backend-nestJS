import { 
  Controller, 
  Post, 
  Body, 
  Get, 
  Put, 
  Delete,
  Param,
  UseGuards
} from '@nestjs/common';
import {ArticleService} from './article.service';
import { Article } from '../entity/article';
import { OptionalAuthGuard } from 'src/auth/optional-auth.gaurd';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('articles')
export class ArticleController {
  constructor(private service: ArticleService) { }

  @Get('/article/:id')
  get(@Param('id') id : number) {
    return this.service.getArticle(id);
  }

  @Get()
  getAllArticle() {
    return this.service.getArticles();
  }

  @Get('/category/:id')
  getSomeCategoryArticle(@Param() params){
    return this.service.getSomeCategoryArticle(params.id);
  }

  @Get('/last')
  getLastNews(){
    return this.service.getLastNews();
  }

  @Get('/page/:numberPage')
  getNewsPerPage(@Param() params){
    if(params.numberPage == 0)
      return this.service.getNewsPerPage(params.numberPage);
    else
      return this.service.getNewsPerPage(params.numberPage+5);
  }


  
  @Post()
  @UseGuards(JwtAuthGuard)
  post(@Body() article: Article) {
    return this.service.postArticle(article);
  }

  
  @Put()
  @UseGuards(JwtAuthGuard)
  updateArticle(@Body() article:Article){
    return this.service.updateArticle(article);
  }
  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteArticle(@Param() params){
    return this.service.deleteArticle(params.id);
  }
}
