import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  ManyToOne 
} from 'typeorm';
import { NormativeBaseCategory } from './normative-base-category';
@Entity()
export class NormativeBase {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Дата приказа
   */
  @Column({type:'date'})
  date:Date;

  /**
   * Номер приказа
   */
  @Column({type:'integer'})
  number:number;

  /**
   * Название приказа
   */
  @Column({type:'varchar'})
  text:string;

  /**
   * Ссылка на документ
   */
  @Column({type:'varchar'})
  url:string;

  /**
   * Категория нормативной базы
   */
  @ManyToOne(() => NormativeBaseCategory, category => category.normative_base, {onDelete:'CASCADE'})
  category: NormativeBaseCategory;

  /**
   * Системные поля
   */
  @CreateDateColumn()
  created_at:Date;

}
