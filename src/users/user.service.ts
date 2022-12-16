import { Inject, Injectable } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('STORE_FEATUREusers.json') private storeService: StoreService) {}

  getAllUsers() {
    return 'All users';
  }
  getUserById(id: number) {
    return `User with id: ${id}`;
  }
  createUser(user: UserDto): UserDto {
    // this.storeService.save(user);
    return UserDto.plainToClass(user);
  }
}
