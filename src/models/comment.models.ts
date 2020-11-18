import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

import { Users } from '../entity/users';

export class CreateCommentDTO {
  @IsString()
  @ApiProperty()
  body: string;
}

export class CreateCommentBody {
  @ApiProperty()
  comment: CreateCommentDTO;
}

export class CommentResponse {
  id: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  body: string;
}
