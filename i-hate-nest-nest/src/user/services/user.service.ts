import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserDocument } from 'src/dal/mongodb/schemas/user.schema';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { BcryptService } from 'src/encryption/services/bcrypt.service';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptService: BcryptService,
  ) {}

  async addUser(userDto: CreateUserDto): Promise<UserDocument> {
    try {
      userDto.password = await this.bcryptService.hashPassword(userDto.password);
      return this.userRepository.create(userDto);
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new InternalServerErrorException(error.message | error);
    }
  }
}
