import { ForbiddenException, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Cat } from './interface/cat.interface';
import { catdto } from './dto/create.cat.dto';
import { UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/Exceptions/http-exceptions.filters';
import { Param } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { ParseUUIDPipe } from '@nestjs/common';
import { ValidationPipe } from './Pipes/validation.pipe';
import { CatsService } from './cats.service';

@Controller('cats')
//@UseFilters(new HttpExceptionFilter())
export class CatsController {
    constructor(private catservice: CatsService) { }

    @Post()
    async create(@Body() createcatdto: Cat) {
        throw new ForbiddenException()
        //return this.catservice.create(createcatdto)
    }
    @Post()
  createPipe(@Body(new ValidationPipe()) createProduitDto: catdto) {
    return this.catservice.create;
  }
    
    @Get()
    async findAll(): Promise<Cat[]> {
        throw new ForbiddenException();
        /*throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is a custom message',
          }, HttpStatus.FORBIDDEN);
        }*/
        /*throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);*/
        /*return this.catservice.findAll();*/
    }
    /*@Get(':id')
    //async findOne(@Param('id', ParseIntPipe) id: string){
        //async findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))id : string) {
            async findOne(@Query('id', ParseIntPipe)id: string){
        return this.catservice.findOne(id)
    }*/
    @Get(':uuid')
    async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string){
        return this.catservice.findOne(uuid)
    }
    
}
