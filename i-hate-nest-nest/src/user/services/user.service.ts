import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/dal/types/User.type';

@Injectable()
export class UserService {
  private readonly users: User[];
  constructor() {
    this.users = [];
    this.users.push({
      id: '1',
      name: 'Bob',
      age: 99,
      registeredAt: new Date('10/01/25'),
    });
    this.users.push({
      id: '2',
      name: 'Ross',
      age: 66,
      registeredAt: new Date('05/02/24'),
    });
  }
  getUserById(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (id !== user.id) throw new NotFoundException(`User by id:${id} not found`);
    return user;
  }

  getUsers(): User[] {
    return this.users;
  }
}
