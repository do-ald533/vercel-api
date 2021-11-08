import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../schemas/user.schema';

@Injectable()
export class CreatorService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(dto: CreateUserDto): Promise<User> {
    return this.userRepository.createAsync({ ...dto });
  }
}
