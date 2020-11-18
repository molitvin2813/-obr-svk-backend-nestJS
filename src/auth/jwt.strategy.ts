import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Repository } from 'typeorm';

import { Users } from '../entity/users';
import { AuthPayload } from 'src/models/user.model';
import { jwtConstants } from './const'
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Users) private userRepo: Repository<Users>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Token'),
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: AuthPayload) {
    console.log('JwtStrategy.validate '+JSON.stringify(payload));
    const { email } = payload;
    const user = this.userRepo.find({ where: { email } });
    if (!user) {
      
      throw new UnauthorizedException();
    }
    return user;
  }
}
