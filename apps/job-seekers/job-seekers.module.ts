import { JobPosting } from '@app/job-postings-lib';
import { JobSeeker, JobSeekersLibService } from '@app/job-seekers-lib';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobSeekersController } from './job-seekers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([JobSeeker, JobPosting])],
  providers: [JobSeekersLibService],
  controllers: [JobSeekersController],
  exports: [JobSeekersLibService],
})
export class JobSeekersModule {}
