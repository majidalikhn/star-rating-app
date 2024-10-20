import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarInputComponent } from './star-input/star-input.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StarInputComponent], // Add StarInputComponent to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-rating-app';
}
