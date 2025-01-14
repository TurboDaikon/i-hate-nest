import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDocument } from 'src/dal/mongodb/schemas/user.schema';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() userDto: CreateUserDto): Promise<UserDocument> {
    return this.userService.addUser(userDto);
  }
}
