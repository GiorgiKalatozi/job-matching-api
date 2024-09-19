import { Injectable } from '@nestjs/common';
import { Company } from './entites';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyDTO } from './dtos';

@Injectable()
export class CompaniesLibService {
  constructor(
    @InjectRepository(Company)
    private readonly companiesRepository: Repository<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companiesRepository.find();
  }

  async create(
    createCompanyDto: CreateCompanyDTO,
    userId: number,
  ): Promise<Company> {
    const company = this.companiesRepository.create({
      ...createCompanyDto,
      userId,
    });
    return this.companiesRepository.save(company);
  }
}
