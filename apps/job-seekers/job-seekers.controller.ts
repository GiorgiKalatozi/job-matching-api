import { GetCurrentUserId } from '@app/auth-lib/decorators';
import { CreateJobSeekerDto, JobSeekersLibService } from '@app/job-seekers-lib';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller({ path: 'job-seekers', version: '1' })
export class JobSeekersController {
  constructor(private readonly jobSeekersService: JobSeekersLibService) {}

  @Post()
  create(
    @Body() createJobSeekerDto: CreateJobSeekerDto,
    @GetCurrentUserId() userId: number,
  ) {
    return this.jobSeekersService.create(createJobSeekerDto, userId);
  }

  @Get(':id/matched-job-postings')
  getMatchedJobPostings(@Param('id') id: number) {
    return this.jobSeekersService.getMatchedJobPostings(id);
  }
}
