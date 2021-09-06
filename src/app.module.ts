import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './modules/articles/articles.module';

import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'nest_blog',
    autoLoadModels: true,
    synchronize: true
  }), ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
