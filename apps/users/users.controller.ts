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
  // @Roles(Role.Admin)
  public create(user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  public findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch()
  // @Roles(Role.Admin)
  public update(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.update(id, user);
  }

  @Delete()
  // @Roles(Role.Admin)
  public remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
