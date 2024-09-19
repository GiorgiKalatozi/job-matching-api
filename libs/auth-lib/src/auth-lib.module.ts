import { User, UsersLibService } from '@app/users-lib';
import { UsersRepository } from '@app/users-lib/repositories/users.repository';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthLibService } from './auth-lib.service';
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    AuthLibService,
    UsersRepository,
    UsersLibService,
    JwtService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  exports: [AuthLibService],
})
export class AuthLibModule {}
