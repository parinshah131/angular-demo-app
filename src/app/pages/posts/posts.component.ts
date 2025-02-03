import { Component } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { HoverEffectDirective } from '../../shared/directive/hover.directive';

@Component({
  selector: 'app-posts',
  imports: [HoverEffectDirective],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    // Calls the getPosts() method from PostService.
    this.postService.getPosts().subscribe((data) => (this.posts = data as any[]));
  }
}
