import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  OneToMany,
  OneToOne
} from 'typeorm';
import { NormativeBase } from './normative-base';
@Entity()
export class NormativeBaseCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @OneToOne(()=>NormativeBase, nb=>nb.category)
    normative_base:NormativeBase[];
}
