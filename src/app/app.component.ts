import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, BottomNavigationComponent],
})
export class AppComponent {
  title = 'daily-read';
}
