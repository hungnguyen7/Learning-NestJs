import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(
    @Inject('POST_SERVICE') private readonly postService: PostService,
  ) {}
  @Post()
  createPost(@Body() data: any): void {
    this.postService.createPost(data);
  }
}
