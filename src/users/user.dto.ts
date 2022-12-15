import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  username: string;

  firstName: string;
  lastName: string;

  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  @Expose()
  fullName: string;

  @IsNotEmpty()
  @Expose()
  password: string;
}
 