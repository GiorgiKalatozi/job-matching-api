import { Role, Roles } from '@app/common';
import { User, UsersLibService } from '@app/users-lib';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersLibService) {}

  @Post()
  @Roles(Role.ADMIN)
  create(user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  @Roles(Role.ADMIN)
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Roles(Role.ADMIN)
  @Patch()
  update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }

  @Delete()
  @Roles(Role.ADMIN)
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
