import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticlesController } from './articles.controller';
import { ArticlesModel } from './articles.model';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [SequelizeModule.forFeature([ArticlesModel])]
})
export class ArticlesModule {}
