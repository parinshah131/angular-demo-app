import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { AuthService } from '../../auth/services/auth.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {

  // Stores form error messages (e.g., invalid credentials).
  formError: string = "";

  // Stores the username entered by the user.
  username: string = "";

  // Stores the password entered by the user.
  password: string = "";
  // showError = "";

  // Indicates whether the form is currently being submitted.
  submitting = false;

  constructor(public router: Router, private authService: AuthService) {
  }

  ngOnInit() {

  }

  async onSubmit(signInForm: NgForm) {
    debugger;
    // if (signInForm.invalid) {
    //   return; // Prevents form submission if it's invalid
    // }
    this.formError = "";
    this.submitting = true;
    const result = await this.authService.login(this.username, this.password);
    if (!result) {
      this.submitting = false;
      this.formError = 'Invalid Credentials';
    }
    else {
      const redirectUrl = this.authService.isAdminUser() ? '/admin' : '/user';
      this.router.navigate([redirectUrl]);
    }
  }

}
