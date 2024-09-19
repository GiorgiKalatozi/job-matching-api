import { Module } from '@nestjs/common';
import { CompaniesLibService } from './companies-lib.service';
import { Company } from './entites';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompaniesLibService],
  exports: [CompaniesLibService],
})
export class CompaniesLibModule {}
