import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class LoginDTO {
  @IsString()
  @ApiProperty()
  email: string;
  

  @IsString()
  @ApiProperty()
  password: string;
}

export class LoginBody extends LoginDTO{
  
}

export class RegisterDTO extends LoginDTO {
  
 
}

export class RegisterBody {
  @ApiProperty()
  user: RegisterDTO;
}

export class UpdateUserDTO {
  //@IsEmail()
  //@IsOptional()
  email: string;

}

export class UpdateUserBody {
  @ApiProperty()
  user: UpdateUserDTO;
}

export interface AuthPayload {
  email: string;
}

export interface UserResponse {
  email: string;
}

export interface AuthResponse extends UserResponse {
  token: string;
}


