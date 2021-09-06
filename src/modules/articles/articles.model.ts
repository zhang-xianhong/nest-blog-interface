import sequelize from 'sequelize';
import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from '../base.entity';

@Table({
    tableName: 'article',
    timestamps: false,
    underscored: true
})

export class ArticlesModel extends BaseModel {

    @Column({
        type: DataType.BIGINT,
        comment: '文章类型编号',
    })
    typeId: number;

    @Column({
        type: DataType.STRING,
        comment: '文章标题',
    })
    articleTitle: string;

    @Column({
        type: DataType.STRING,
        comment: '文章主体内容',
    })
    articleContent: string;

    @Column({
        type: DataType.STRING(2048),
        comment: '文章简介',
    })
    articleIntroduce: string;

    @Column({
        type: DataType.DATE,
        comment: '文章发布时间',
        // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    })
    addTime: Date;

    @Column({
        type: DataType.BIGINT,
        comment: '文章游览次数',
    })
    viewCount: number;
}