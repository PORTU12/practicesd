import { Req, Query, HttpCode, Res, Redirect, HttpStatus } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { ListAllEntities } from './cats/entities/allentities.dto';

@Controller('app')
export class AppController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get('entities')
  finAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }
  @Get('request')
  findrequest(@Req() request: Request): string {
    return 'this action return this request';
  }
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  /*@Post()
  @HttpCode(204)
  CREATE(@Res() response: Response) {
    return 'this action add a new cat'
  }*/
  @Get('id')
  FIND(@Param('id') id: string): string {
    return `This action returns a #${id} cat`
  }
  @Post('tr')
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get('re')
  fiAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
}}
