import { Module } from '@nestjs/common';
import { JobSeekersLibService } from './job-seekers-lib.service';

@Module({
  providers: [JobSeekersLibService],
  exports: [JobSeekersLibService],
})
export class JobSeekersLibModule {}
