import { Module } from '@nestjs/common';
import { CompaniesLibService } from './companies-lib.service';

@Module({
  providers: [CompaniesLibService],
  exports: [CompaniesLibService],
})
export class CompaniesLibModule {}
