import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/services/auth.guard';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

export const routes: Routes = [

  // Default route that loads the LoginComponent when the app starts.
  { path: '', component: LoginComponent },

  // Explicit route to load the LoginComponent when navigating to `/login`.
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    // Lazy-loads the AdminModule when the user navigates to `/admin`.
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),

    // Protects this route with the AuthGuard, ensuring only authenticated users can access it.
    canActivate: [AuthGuard],
    
    // Specifies that only users with the 'admin' role can access this route.
    data: { role: 'admin' }
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/userposts/userposts.module').then(m => m.UserPostsModule),
    canActivate: [AuthGuard],

    // Specifies that only users with the 'user' role can access this route.
    data: { role: 'user' }
  },
  { path: 'access-denied', component: AccessDeniedComponent },
  // { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent) , canActivate: [AuthGuard]},
  // { path: 'user', loadComponent: () => import('./pages/userposts/userposts.component').then(m => m.UserpostsComponent), canActivate: [AuthGuard] },
  
  // Wildcard route: Redirects all unknown paths to the login page.
  { path: '**', redirectTo: '/login' },

  // Redirects the base path (`/`) to `/login`.
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];