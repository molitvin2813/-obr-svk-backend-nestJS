import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NormativeBase } from '../entity/normative-base';
import { NormativeBaseController } from './normative-base.controller';
import { NormativeBaseService } from './normative-base.service';
@Module({
  imports:[TypeOrmModule.forFeature([NormativeBase])],
  providers: [NormativeBaseService],
  controllers: [NormativeBaseController]
})
export class NormativeBaseModule {}
