import { Module } from '@nestjs/common';
import { JobSeekersLibService } from './job-seekers-lib.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobSeeker } from './entities';
import { JobPosting } from '@app/job-postings-lib';

@Module({
  imports: [TypeOrmModule.forFeature([JobSeeker, JobPosting])],
  providers: [JobSeekersLibService],
  exports: [JobSeekersLibService],
})
export class JobSeekersLibModule {}
