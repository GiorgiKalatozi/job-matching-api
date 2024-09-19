import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User, UsersLibService } from '@app/users-lib';
import { UsersRepository } from '@app/users-lib/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthLibService } from '@app/auth-lib';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersLibService, UsersRepository, AuthLibService, JwtService],
  controllers: [UsersController],
  exports: [UsersLibService],
})
export class UsersModule {}
