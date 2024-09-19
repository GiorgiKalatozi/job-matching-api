import { CommonEntity } from '@app/common';
import { JobPosting } from '@app/job-postings-lib';
import { JobSeeker } from '@app/job-seekers-lib/entities/job-seeker.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity({ name: 'skills' })
export class Skill extends CommonEntity {
  @Column()
  name: string;

  @ManyToMany(() => JobSeeker, (jobSeeker) => jobSeeker.skills)
  jobSeekers: JobSeeker[];

  @ManyToMany(() => JobPosting, (jobPosting) => jobPosting.skills)
  jobPostings: JobPosting[];
}
