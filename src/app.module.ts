import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { ArticleCategorysModule } from './article-categorys/article-categorys.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import {Article} from './entity/article';
import {ArticleCategorys} from './entity/article-categorys';
import { NormativeBaseCategorysModule } from './normative-base-categorys/normative-base-categorys.module';
import { NormativeBaseModule } from './normative-base/normative-base.module';
import { NormativeBase } from './entity/normative-base';
import { NormativeBaseCategory } from './entity/normative-base-category';
import { UsersModule } from './users/users.module';
import { Users } from './entity/users';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nestjs_test_app',
      entities: [
        Article, 
        ArticleCategorys,
        NormativeBase, 
        NormativeBaseCategory,
        Users
      ],
      synchronize: true,
      insecureAuth : true,
    }),
    ArticleModule, 
    ArticleCategorysModule, 
    NormativeBaseCategorysModule, 
    NormativeBaseModule, 
    UsersModule, 
    AuthModule
     
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
