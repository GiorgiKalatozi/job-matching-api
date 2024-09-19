import { Module } from '@nestjs/common';
import { CompaniesController } from './companies.controller';
import { CompaniesLibService, Company } from '@app/companies-lib';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompaniesLibService],
  controllers: [CompaniesController],
  exports: [CompaniesLibService],
})
export class CompaniesModule {}
