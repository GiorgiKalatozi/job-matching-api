import { Module } from '@nestjs/common';
import { AuthLibService } from './auth-lib.service';
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies';
import { UsersRepository } from '@app/users-lib/repositories/users.repository';
import { User, UsersLibService } from '@app/users-lib';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

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
