import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule for common directives
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true, // <-- Mark as standalone
  imports: [CommonModule, RouterModule], // <-- Import necessary modules
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularChallenge';
}
