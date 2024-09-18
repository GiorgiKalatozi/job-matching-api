import { DatabaseModule } from '@app/database';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JobSeekersController } from './job-seekers/job-seekers.controller';
import { JobSeekersModule } from './job-seekers/job-seekers.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    JobSeekersModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [JobSeekersController, AuthController],
  providers: [],
})
export class AppModule {}
