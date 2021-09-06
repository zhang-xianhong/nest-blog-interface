import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QueryPipe, SearchQuery } from 'src/shared/pipes/query.pipe';
import { ArticlesService } from './articles.service';
import { CreateArticlesDto } from './dto/create-articles.dto';
import { UpdateArticlesDto } from './dto/update-articles.dto';

@ApiTags('文章')
@Controller('articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) {}
    @Get()
    index(): string {
        return 'Article Page';
    }
    
    @Get('getArticleList')
    findAll2(@Query(new QueryPipe()) query: SearchQuery): Promise<any> {
        return this.articlesService.findAll(query);
    }

    @Post('create')
    create(@Body() createArticlesDto: CreateArticlesDto): Promise<any> {
        return this.articlesService.create(createArticlesDto);
    }

    @Post('update/:id')
    update(@Param('id') id, @Body() updateArticlesDto: UpdateArticlesDto) {
        return this.articlesService.update(id, updateArticlesDto);
    }

    @Post('delete/:id')
    remove(@Param('id') id): Promise<object> {
        return this.articlesService.remove(id);
    }
}
