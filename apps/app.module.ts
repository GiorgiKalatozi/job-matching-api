import { DatabaseModule } from '@app/database';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JobSeekersController } from './job-seekers/job-seekers.controller';
import { JobSeekersModule } from './job-seekers/job-seekers.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '@app/common';
import { CompaniesModule } from './companies/companies.module';
import { AccessTokenGuard } from '@app/auth-lib';
import { CompaniesController } from './companies/companies.controller';
import { JobPostingsModule } from './job-postings/job-postings.module';
import { JobPostingsController } from './job-postings/job-postings.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    JobSeekersModule,
    UsersModule,
    AuthModule,
    CompaniesModule,
    JobPostingsModule,
  ],
  controllers: [
    JobSeekersController,
    AuthController,
    UsersController,
    CompaniesController,
    JobPostingsController,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AppModule {}
