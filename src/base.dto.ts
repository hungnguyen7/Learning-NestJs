import { Expose, plainToClass } from 'class-transformer';

export abstract class BaseDto {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  static plainToClass<T>(this: new () => T, plain: object): T {
    return plainToClass(this, plain, { excludeExtraneousValues: true });
  }
}
