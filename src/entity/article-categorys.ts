import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn,
  UpdateDateColumn, 
  OneToMany,
  ManyToOne
} from 'typeorm';
import { Article } from './article';
@Entity()
export class ArticleCategorys {
  @PrimaryGeneratedColumn()
  id: number;

  
  /**
   * Категория статьи
   */
  @Column({type:'varchar'})
  category:string;
  
 
  @OneToMany(() => Article, article => article.category)
  article:Article[];
  
  /**
   * Системные поля
   */
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
