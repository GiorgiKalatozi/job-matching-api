import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User, UsersLibService } from '@app/users-lib';
import { UsersRepository } from '@app/users-lib/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthLibService } from '@app/auth-lib';
import { JwtService } from '@nestjs/jwt';
import { JobPosting } from '@app/job-postings-lib';
import { Skill } from '@app/skills-lib';
import { JobSeeker } from '@app/job-seekers-lib/entities/job-seeker.entity';
import { Company } from '@app/companies-lib/entites/company.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, JobSeeker, Skill, JobPosting, Company]),
  ],
  providers: [UsersLibService, UsersRepository, AuthLibService, JwtService],
  controllers: [UsersController],
  exports: [UsersLibService],
})
export class UsersModule {}
