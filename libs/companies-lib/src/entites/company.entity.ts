import { CommonEntity } from '@app/common';
import { JobPosting } from '@app/job-postings-lib';
import { User } from '@app/users-lib';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'companies' })
export class Company extends CommonEntity {
  @Column()
  companyName: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  contactNumber?: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.companyProfiles)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => JobPosting, (jobPosting) => jobPosting.company)
  jobPostings: JobPosting[];
}
