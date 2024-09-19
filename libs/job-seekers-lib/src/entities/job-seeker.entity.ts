import { CommonEntity } from '@app/common';
import { Skill } from '@app/skills-lib';
import { User } from '@app/users-lib';
import { Entity, ManyToMany, JoinTable, ManyToOne, Column } from 'typeorm';

@Entity({ name: 'job_seekers' })
export class JobSeeker extends CommonEntity {
  @ManyToOne(() => User, (user) => user.jobSeekerProfiles)
  user: User;

  @ManyToMany(() => Skill, { cascade: true })
  @JoinTable()
  skills: Skill[];

  @Column({ nullable: true })
  resumeUrl: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  experienceYears: number;

  @Column({ type: 'text', nullable: true })
  summary: string;

  @Column({ nullable: true })
  desiredSalary: number;
}
