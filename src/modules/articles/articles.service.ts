import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ArticlesModel } from './articles.model';
import { CreateArticlesDto } from './dto/create-articles.dto';
import { UpdateArticlesDto } from './dto/update-articles.dto';
import { SearchQuery } from 'src/shared/pipes/query.pipe';
import { escapeLike } from 'src/shared/utils/sql';
import { Op } from 'sequelize';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel(ArticlesModel) private articlesModel: typeof ArticlesModel) {}

    async findAll(query: SearchQuery): Promise<any> {
        // const { rows = [], count } = await this.articleModel.findAndCountAll();
        const where: any = {};
        if(query.keyword) {
            const likeString = escapeLike(query.keyword);
            where.articleTitle = {
                [Op.like]: likeString,
            }
        }
        if(query.typeId) {
            where.typeId = query.typeId;
        }
        const { conditions = {} } = query as { conditions: { [key: string]: any } };
        conditions.where = where;
        const { rows = [], count } = await this.articlesModel.findAndCountAll(conditions);
        return {
            rows,
            count
        }
    }

    // 添加
    async create(createArticlesDto: CreateArticlesDto): Promise<any> {
        try {
            console.log('create', createArticlesDto);
            const article = new ArticlesModel({
                ...createArticlesDto,
                addTime: new Date()
            })
            const res = await article.save();
            return {
                code: 0,
                rows: res
            }
        } catch (error) {
            console.log(error);
        }
    }

    // 更新
    async update(id: number, updateArticlesDto: UpdateArticlesDto): Promise<any> {
        try {
            console.log('update', updateArticlesDto);
            const updateForm = {
                ...updateArticlesDto
            }
            const res = this.articlesModel.update(updateForm, {
                where: {
                    id
                }
            })
            return {
                code: 0,
                res
            }
        } catch (error) {
            console.log(error);
        }
    }

    // 删除
    async remove(id: number): Promise<object> {
        const removeId = this.articlesModel.destroy({
            where: {
                id
            }
        })
        return {
            code: 0,
            id: removeId
        }
    }
}
