import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersLibService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(user: User): Promise<User> {
    return this.usersRepository.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findOneWithUsername(username: string): Promise<User> {
    return this.usersRepository.findOneWithUsername(username);
  }

  async update(id: number, user: User): Promise<User> {
    const userToUpdate = await this.usersRepository.update(id, user);
    if (!userToUpdate) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return userToUpdate;
  }

  async remove(id: number): Promise<void> {
    return await this.usersRepository.remove(id);
  }
}
