import {
  Entity,
  Column,
  BeforeInsert,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Exclude, classToPlain } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

import { AbstractEntity } from './abstract-entity';
import { UserResponse } from 'src/models/user.model';

@Entity('users')
export class Users extends AbstractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  
  email: string;

  @Column()
  
  password: string;

  
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  toJSON(): UserResponse {
    return <UserResponse>classToPlain(this);
  }
}