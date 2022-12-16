import { Inject, Injectable } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';

@Injectable()
export class PostService {
  constructor(
    @Inject('STORE_FEATUREposts.json')
    private readonly storeService: StoreService,
  ) {}
  createPost(data: any): void {
    this.storeService.save(data);
  }
}
