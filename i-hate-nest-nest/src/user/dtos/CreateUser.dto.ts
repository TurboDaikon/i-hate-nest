import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ default: 'bob', required: true, type: 'string' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ default: '123aA&aaaaaa', required: true, type: 'string' })
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({ minLowercase: 1, minUppercase: 1, minSymbols: 1 }, { message: 'bruh' })
  password: string;
}
