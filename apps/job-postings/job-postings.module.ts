import { Module } from '@nestjs/common';
import { JobPostingsController } from './job-postings.controller';

@Module({
  controllers: [JobPostingsController]
})
export class JobPostingsModule {}
