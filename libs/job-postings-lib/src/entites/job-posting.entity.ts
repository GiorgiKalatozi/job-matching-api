import { CommonEntity } from '@app/common';
import { Company } from '@app/companies-lib/entites/company.entity';
import { Skill } from '@app/skills-lib';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'job_postings' })
export class JobPosting extends CommonEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Company, (company) => company.jobPostings)
  company: Company;

  @ManyToMany(() => Skill, { cascade: true })
  @JoinTable()
  skills: Skill[];
}
