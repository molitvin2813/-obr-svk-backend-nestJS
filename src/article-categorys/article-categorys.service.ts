import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ArticleCategorys} from '../entity/article-categorys';

@Injectable()
export class ArticleCategorysService {
  constructor(@InjectRepository(ArticleCategorys) private articleRepository: Repository<ArticleCategorys>) {

  }

  async getArticleCategorys(): Promise<ArticleCategorys[]> {
    return await this.articleRepository.find();
  }

  async getArticleCategory(id:number): Promise<ArticleCategorys[]>{
    return await this.articleRepository.find(
      {
        select: ["id",'category'],
        where: [{ "id": id }],
      }
    );
  }

  async postArticleCategory(category: ArticleCategorys){
    await this.articleRepository.insert(category);
  }

  async updateArticleCategory(category: ArticleCategorys){
    await this.articleRepository.save(category);
  }

  async deleteArticleCategory(id:number){
    let articleCategoryForRemove = await this.articleRepository.findOne(id);
    await this.articleRepository.remove(articleCategoryForRemove);
  }
}
