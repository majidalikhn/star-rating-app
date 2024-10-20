import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-star-input',
  standalone: true,
  templateUrl: './star-input.component.html',
  styleUrls: ['./star-input.component.css'],
  imports: [CommonModule] // Add CommonModule to imports
})
export class StarInputComponent {
  starCount: number = 0;

  getStars() {
    return new Array(this.starCount);
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.starCount = parseInt(inputElement.value) || 0;
  }
}
