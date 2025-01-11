import { IsNotEmpty, IsString } from 'class-validator';

export class FriendDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
