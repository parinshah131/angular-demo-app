import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // <-- Import AppComponent
import { provideRouter } from '@angular/router'; // <-- Import provideRouter for routing
import { routes } from './app/app.routes'; // <-- Import your routes
import { provideHttpClient } from '@angular/common/http'; // <-- Import provideHttpClient for HTTP

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // <-- Provide the router configuration
    provideHttpClient() // <-- Provide HttpClient
  ]
})
.catch(err => console.error(err));