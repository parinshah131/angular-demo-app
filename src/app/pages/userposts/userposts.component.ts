import { Component } from '@angular/core';
import { LogoutComponent } from "../logout/logout.component";
import { PostService } from '../../shared/services/post.service';
import { AuthService } from '../../auth/services/auth.service';
import { TitlePipe } from '../../shared/pipes/title.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userposts',
  imports: [LogoutComponent, CommonModule, TitlePipe],
  templateUrl: './userposts.component.html',
  styleUrl: './userposts.component.css'
})
export class UserpostsComponent {
  post: any;

  constructor(private authService: AuthService, private postService: PostService, private router: Router) { }

  ngOnInit() {
    const userId = this.authService.getUserId();
    if (userId) {
      this.postService.getPostById(userId).subscribe((data) => {
        this.post = data;
      });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
