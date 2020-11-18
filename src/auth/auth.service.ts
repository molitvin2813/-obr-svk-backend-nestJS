import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

import { Users } from '../entity/users';
import {
  LoginDTO,
  RegisterDTO,
  UpdateUserDTO,
  AuthResponse,
} from 'src/models/user.model';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<Users>,
    private jwtService: JwtService,
  ) {}

  async register(credentials: RegisterDTO) : Promise<AuthResponse>{
    try {
      let user = plainToClass(Users, credentials);
      await console.log(credentials);
      await this.userRepo.save(user);
      let payload = { email: user.email };
      let token = this.jwtService.sign(payload);
      let email = user.email;
      return { email, token };
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('email has already been taken');
      }
      throw new InternalServerErrorException();
    }
  }

  async login(dd: LoginDTO): Promise<AuthResponse> {
    try {
      let email= dd.email;
      let user = await this.userRepo.findOne({ where: { email } });
      await console.log(dd);
      let isValid = await user.comparePassword(dd.password);
      await console.log(isValid);
      if (!isValid) {
        throw new UnauthorizedException('Invalid credentials');
      }
      let payload = { email: user.email };
      const token = this.jwtService.sign(payload);

      
      return { email, token };
    } catch (err) {
      throw new UnauthorizedException(err.message);
    }
  }


 
}
