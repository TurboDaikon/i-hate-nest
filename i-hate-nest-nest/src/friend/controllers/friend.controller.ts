import { Body, Controller, Get, Param, Post, Query, Req, Request } from '@nestjs/common';
import { FriendService } from '../services/friend.service';
import { FriendDto } from '../dto';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post('/friend')
  makeFriends(@Query('id') id: string, @Body() friendDto: FriendDto): string {
    return this.friendService.makeFriends(friendDto.id, id);
  }
}
