import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

// This makes the AuthGuard available across the entire app without needing to import it in a module
@Injectable({
    providedIn: 'root'
})

// Implements the CanActivate interface to restrict access to routes
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    // Method that decides whether a route can be activated or not
    canActivate(route: ActivatedRouteSnapshot): boolean {
        debugger
        let userRole = this.authService.getRole().getValue(); //Fetches the currently logged-in user's role (e.g., 'admin' or 'user')
        const expectedRole = route.data['role']; // Retrieves the expected role defined in the route's data property
       
        if (!userRole) { 
            userRole = localStorage.getItem('role'); // Retrieve from localStorage if BehaviorSubject is null
        }
        // Checks if the user is logged in
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']); // Redirects to the login page if the user is not authenticated
            return false;
        }

        // Checks if the expected role is defined and if it matches the current logged in role
        if (expectedRole && expectedRole !== userRole) {
            alert('Access Denied: You do not have permission to view this page.');

            // if the user is logged in and does not have the correct role, deny access to the requested route
            this.router.navigate(['/access-denied']);
            return false;
        }

        return true;
    }
}
