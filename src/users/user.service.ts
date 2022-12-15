import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  getAllUsers() {
    return 'All users';
  }
  getUserById(id: number) {
    return `User with id: ${id}`;
  }
  createUser(user: UserDto): UserDto {
    return UserDto.plainToClass(user);
  }
}
