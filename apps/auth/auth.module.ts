import {
  AccessTokenStrategy,
  AuthLibService,
  RefreshTokenStrategy,
} from '@app/auth-lib';
import { User, UsersRepository } from '@app/users-lib';
import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    AuthLibService,
    JwtService,
    UsersRepository,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthLibService],
})
export class AuthModule {}
