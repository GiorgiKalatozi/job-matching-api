import { GetCurrentUserId } from '@app/auth-lib/decorators';
import { Public } from '@app/common';
import {
  CompaniesLibService,
  Company,
  CreateCompanyDTO,
} from '@app/companies-lib';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller({ path: 'companies', version: '1' })
export class CompaniesController {
  constructor(private readonly companiesLibService: CompaniesLibService) {}

  @Public()
  @Get()
  async findAll() {
    return 'hello';
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createCompanyDto: CreateCompanyDTO,
    @GetCurrentUserId() userId: number,
  ): Promise<Company> {
    return this.companiesLibService.create(createCompanyDto, userId);
  }
}
