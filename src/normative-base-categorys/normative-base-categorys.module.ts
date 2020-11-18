import { Module } from '@nestjs/common';
import { NormativeBaseCategorysService } from './normative-base-categorys.service';
import { NormativeBaseCategorysController } from './normative-base-categorys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NormativeBaseCategory } from '../entity/normative-base-category';

@Module({
  imports:[TypeOrmModule.forFeature([NormativeBaseCategory])],
  providers: [NormativeBaseCategorysService],
  controllers: [NormativeBaseCategorysController]
})
export class NormativeBaseCategorysModule {}
