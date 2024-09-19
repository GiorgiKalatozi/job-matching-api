import { Module } from '@nestjs/common';
import { UsersLibService } from './users-lib.service';
import { UsersRepository } from './repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersLibService, UsersRepository],
  exports: [UsersLibService],
})
export class UsersLibModule {}
