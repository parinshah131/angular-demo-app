import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserpostsComponent } from './userposts.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserpostsComponent }  // Lazy-loaded route
    ])
  ],
  declarations: [],
  providers: []
})
export class UserPostsModule {}
