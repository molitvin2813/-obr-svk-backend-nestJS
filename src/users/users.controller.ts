import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from '../entity/users';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  
  constructor(private service: UsersService) { }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAllUser() {
    return this.service.getUsers();
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  update(@Body() user: Users) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }

  @Post()
  postUser(@Body() user:Users){
    console.log(user);
    return this.service.postUser(user);
  }
}
