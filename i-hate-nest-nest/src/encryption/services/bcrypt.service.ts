import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BcryptService {
  constructor(private readonly configService: ConfigService) {}

  public async hashPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, parseInt(this.configService.get('PASSWORD_HASH_ROUNDS')));
    return hash;
  }
}
