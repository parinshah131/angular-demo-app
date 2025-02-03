import { Component } from '@angular/core';
import { LogoutComponent } from "../logout/logout.component";
import { PostsComponent } from "../posts/posts.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin',
  imports: [LogoutComponent, PostsComponent,CommonModule,RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
