import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async create(user: Partial<User>): Promise<User> {
    return this.usersRepository.create(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async findOneWithUsername(username: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { email: username } });
  }
  async findOneWithEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { email: email } });
  }

  async update(id: number, user: User): Promise<User> {
    const userToUpdate = await this.usersRepository.findOne({ where: { id } });
    await this.usersRepository.update(id, user);
    return userToUpdate;
  }

  async save(user: Partial<User>): Promise<User> {
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const result = await this.usersRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException('User not found');
    }
  }
}
