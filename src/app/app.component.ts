import { Component } from '@angular/core';
/*import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';*/

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [CommonModule, RouterOutlet,CounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'contador';
}
