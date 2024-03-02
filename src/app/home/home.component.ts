import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  static LOCAL_STORAGE_KEY = 'current_day_key';

  currentDay: number;

  constructor() {
    this.currentDay = this.getCurrentDay() || 0;
  }

  getCurrentDay() {
    const value = localStorage.getItem(HomeComponent.LOCAL_STORAGE_KEY);

    if (!value) {
      return 1;
    }

    try {
      const intValue = Number.parseInt(value);

      return intValue;
    } catch (e) {
      return 1;
    }
  }

  saveCurrentDay(day: number | string) {
    day = typeof day === 'string' ? Number.parseInt(day) : day;
    this.currentDay = day;

    localStorage.setItem(HomeComponent.LOCAL_STORAGE_KEY, String(day));
  }

  completeCurrentDay() {
    let currentDay = this.getCurrentDay() || 0;

    currentDay++;

    this.saveCurrentDay(currentDay);
  }
}
