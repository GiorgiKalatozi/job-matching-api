import { CommonEntity } from '@app/common';
import { Role } from '@app/common/enums';
import { Column } from 'typeorm';

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
}
