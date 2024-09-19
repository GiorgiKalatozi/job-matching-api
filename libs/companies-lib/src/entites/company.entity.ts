import { CommonEntity } from '@app/common';
import { JobPosting } from '@app/job-postings-lib';
import { User } from '@app/users-lib';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'companies' })
export class Company extends CommonEntity {
  @Column()
  companyName: string;

  @Column({ nullable: true })
  website: string;

  @ManyToOne(() => User, (user) => user.companyProfiles)
  user: User;

  @OneToMany(() => JobPosting, (jobPosting) => jobPosting.company)
  jobPostings: JobPosting[];
}
