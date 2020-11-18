import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { DeepPartial, Repository } from 'typeorm';
import { Users } from '../entity/users'

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

  async getUsers(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number): Promise<Users> {
    return await this.usersRepository.findOne(_id);
  }

  async postUser(user: DeepPartial<Users>){
   
    let newUser = plainToClass(Users, user);
    await console.log(user);
    await this.usersRepository.save(newUser);
  }

  async updateUser(user: DeepPartial<Users>) {
    let newUser = plainToClass(Users, user);
    await console.log(newUser);
    await this.usersRepository.save(user);
  }

  async deleteUser(id:number) {
    let userForRemove = await this.usersRepository.findOne(id);
    await this.usersRepository.remove(userForRemove);
  }
}
