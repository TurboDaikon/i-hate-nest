import { Body, Controller, Get, Param, Post, Query, Req, Request } from '@nestjs/common';
import { FriendService } from '../services/friend.service';
import { User } from 'src/dal/types/User.type';
import { FriendDto } from '../dto';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post('/friend')
  makeFriends(@Query('id') id: string, @Body() dto: FriendDto): string {
    return this.friendService.makeFriends(dto.id, id);
  }
}
