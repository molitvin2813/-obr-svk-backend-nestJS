import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Article} from '../entity/article';

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private articleRepository: Repository<Article>) {

  }

  /**
   * Получаем список всех статей
   */
  async getArticles(): Promise<Article[]> {
    return await this.articleRepository.find({
      select: ["id", "header", "date","short_description", "main_image_url"],
      join: {
        alias: "article_categorys",
        leftJoinAndSelect: {
          category: "article_categorys.category"
        }, 
      }, 
    });
  }

  /**
   * Получаем конкретную статью
   * 
   * @param id ID статьи
   */
  async getArticle(id:number): Promise<Article[]>{
    return await this.articleRepository.find(
      {
        select: ["id", "header", "date","short_description", "text", "main_image_url"],
        join: {
          alias: "article_categorys",
          leftJoinAndSelect: {
            category: "article_categorys.category"
          }, 
        },
        where: [{ "id": id }],
      }
    );
  }

  /**
   * Получаем список статей, принадлежащих к 
   * одной категории 
   * 
   * @param id ID категории статьи
   */
  async getSomeCategoryArticle(id:number): Promise<Article[]>{
    return await this.articleRepository.find(
      {
        select: ["id", "header", "date","short_description", "main_image_url"],
        join: {
          alias: "article_categorys",
          leftJoinAndSelect: {
            category: "article_categorys.category"
          }, 
        },
        where: [{ "category": id }],
      }
    );
  }

  /**
   * Добавляем статью в БД
   * 
   * @param article object Статья
   */
  async postArticle(article: Article){
    await this.articleRepository.insert(article);
  }

  /**
   * Обнавляем статью 
   * 
   * @param article object Статья
   */
  async updateArticle(article:Article){
    await this.articleRepository.save(article);
  }

  /**
   * Удаляем статью по ее ID
   * 
   * @param id number ID удаляемой статьи
   */
  async deleteArticle(id:number){
    let articleForRemove = await this.articleRepository.findOne(id);
    await this.articleRepository.remove(articleForRemove);
  }

  /**
   * Получаем постраничный список статей 
   * 
   * @param numberPage номер страницы
   */
  async getNewsPerPage(numberPage:number): Promise<Article[]>{
    return await this.articleRepository.find({
      select: ["id", "header", "date","short_description", "main_image_url"],
      
      join: {
        alias: "article_categorys",
        leftJoinAndSelect: {
          category: "article_categorys.category"
        },
      },
      skip:numberPage,
      take:5,

    }); 
  }

  /**
   * Получаем последние пять новостей 
   * 
   */
  async getLastNews(): Promise<Article[]>{
    return await this.articleRepository.find({
      select: ["id", "header", "date","short_description", "main_image_url"],
      
      join: {
        alias: "article_categorys",
        leftJoinAndSelect: {
          category: "article_categorys.category"
        },
      },
      
      
    });  
  }

}
