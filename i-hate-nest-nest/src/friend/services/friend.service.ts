import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class FriendService {
  constructor(private readonly userService: UserService) {}

  makeFriends(bodyId: string, urlId: string): string {
    const users = this.userService.getUsers();
    return `${users.find((user) => user.id === bodyId).name} and ${users.find((user) => user.id === urlId).name} are now friends`;
  }
}
