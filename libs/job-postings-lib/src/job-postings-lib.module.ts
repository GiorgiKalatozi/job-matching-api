import { Module } from '@nestjs/common';
import { JobPostingsLibService } from './job-postings-lib.service';

@Module({
  providers: [JobPostingsLibService],
  exports: [JobPostingsLibService],
})
export class JobPostingsLibModule {}
