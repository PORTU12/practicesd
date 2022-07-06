import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ListAllEntities } from './entities/allentities';
import { catdto } from './dto/create.cat.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(ListAllEntities)
    private companyRepository: Repository<ListAllEntities>
  ) {}

  async create(company: ListAllEntities): Promise<ListAllEntities> {
    const companyCreated = await this.companyRepository.save(company);
    return companyCreated;
  }

  async createc(account: catdto){
} {
    const companyEntity = new ListAllEntities();
      Object.assign(companyEntity);
  }
}
