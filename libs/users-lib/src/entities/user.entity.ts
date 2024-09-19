import { CommonEntity } from '@app/common';
import { Role } from '@app/common/enums';
import { Company } from '@app/companies-lib/entites/company.entity';
import { JobSeeker } from '@app/job-seekers-lib/entities/job-seeker.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class User extends CommonEntity {
  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ type: 'enum', enum: Role, default: Role.JOB_SEEKER })
  role: Role;

  @OneToMany(() => JobSeeker, (jobSeeker) => jobSeeker.user, { nullable: true })
  jobSeekerProfiles: JobSeeker[];

  @OneToMany(() => Company, (company) => company.user, { nullable: true })
  companyProfiles: Company[];
}
