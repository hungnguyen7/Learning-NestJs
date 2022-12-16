import { Module } from '@nestjs/common';
import { StoreModule } from 'src/store/store.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [StoreModule.forFeature({ filename: 'users.json' })],
  controllers: [UserController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ],
})
export class UserModule {}
