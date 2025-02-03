import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  standalone: true
})
export class AccessDeniedComponent {
  constructor(private router: Router, private authService: AuthService) { }

  // Function that determines where the user should be redirected when they click the "Go Back" button.
  goBack() {
    let userRole = this.authService.getRole().getValue();

    if (!userRole) {
      userRole = localStorage.getItem('role');
    }
    // Checks if the logged-in user is an admin or normal user
    const redirectUrl = this.authService.isAdminUser() ? '/admin' : '/user';

    // Navigates the user back to their respective dashboard.
    this.router.navigate([redirectUrl]);
  }
}
