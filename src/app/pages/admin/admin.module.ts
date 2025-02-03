import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    //defines all the child routes for admin page
    RouterModule.forChild([
      {
        path: '', component: AdminComponent,
        children: [

          // When navigating to `/admin/settings`, it loads the SettingsComponent.
          { path: 'settings', component: SettingsComponent },
        ]
      }// Lazy-loaded route
    ])
  ],
  declarations: [],
  providers: []
})
export class AdminModule { }
