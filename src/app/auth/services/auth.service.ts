import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated: boolean = false;
    private role: 'admin' | 'user' | null = null;
    private userId: number | null = null;
    private userSubject = new BehaviorSubject<string | null>(localStorage.getItem('role'));  // Holds the current user role as an observable

    constructor() {
        // Load authentication state from local storage
        this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Retrieves authentication status from local storage
        this.role = localStorage.getItem('role') as 'admin' | 'user' | null; // Retrieves user role from local storage
        this.userId = localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null; // Retrieves user ID from local storage, if available
    }

    /**
     * Handles user login by checking username and password.
     * If the credentials are valid, stores the authentication details in local storage.
     */

    login(username: string, password: string): boolean {
        if (username === 'admin' && password === 'admin') {
            this.isAuthenticated = true;
            this.role = 'admin';
            localStorage.setItem('isAuthenticated', 'true'); // Stores authentication status in local storage
            localStorage.setItem('role', 'admin');
            this.userSubject.next('admin');
            return true;
        } else if (username === 'user' && password === 'user') {
            this.isAuthenticated = true;
            this.role = 'user';
            this.userId = 3;
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('role', 'user');
            localStorage.setItem('userId', this.userId.toString());
            this.userSubject.next('user');
            return true;
        }
        return false;
    }

    /**
     * Handles user logout by clearing authentication details from local storage.
    */
    logout(): void {
        this.isAuthenticated = false;
        this.role = null;
        localStorage.removeItem('isAuthenticated'); // Removes authentication status from local storage
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        this.userSubject.next(null);
    }

    /**
     * Checks if the user is logged in based on local storage data.
     * returns true if the user is authenticated, false otherwise
    */
    isLoggedIn(): boolean {
        return localStorage.getItem('isAuthenticated') === 'true';
    }

    /**
     * Checks if the currently logged-in user is an admin.
     * returns true if the user is an admin, false otherwise
    */
    isAdminUser(): boolean {
        return this.userSubject.getValue() === 'admin';
    }
    // getRole(): 'admin' | 'user' | null {
    //     return localStorage.getItem('role') as 'admin' | 'user' | null;
    // }

    /**
     * Retrieves the logged-in user's ID.
     * returns The user ID if logged in, null otherwise
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Retrieves the user's role as an observable.
     * returns An observable for the current user role
    */
    getRole(): BehaviorSubject<string | null> {
        debugger;
        return this.userSubject;
    }
}
