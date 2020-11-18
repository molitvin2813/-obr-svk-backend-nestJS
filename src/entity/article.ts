import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';

import {ArticleCategorys} from './article-categorys';

@Entity()
export class Article {

  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Заголовок статьи
   */
  @Column({type:'varchar', length:255})
  header:string;

  /**
   * Короткое описание статьи
   */
  @Column({type:'varchar', length:500})
  short_description:string;

  /**
   * Текст статьи
   */
  @Column({type:'varchar'})
  text:string;

  /**
   * Дата размещения статьи
   */
  @Column({type:'datetime'})
  date: Date;

  /**
   * Категория статьи
   */
  @ManyToOne(() => ArticleCategorys, category => category.article, {onDelete:'CASCADE'})
  category: ArticleCategorys;

  /**
   * Ссылка на главное изображение 
   * статьи
   */
  @Column({type:'varchar'})
  main_image_url:string;

  /**
   * Системные поля
   */
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
  
}
