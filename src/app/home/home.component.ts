import { Component } from '@angular/core';
import { DataHandlerService } from '../data-handler/data-handler.service';
import { FormsModule } from '@angular/forms';
import { ReadingDayModel } from '../data-handler/ReadingDayModel';

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

  currentDayData?: ReadingDayModel;

  constructor(private dataImporterService: DataHandlerService) {
    this.currentDay = this.getCurrentDay() || 0;

    this.getDataForCurrentDay();
  }

  getDataForCurrentDay() {
    const localData = this.dataImporterService.getLocalData();

    const currentDayData = localData?.find(
      (e) => e.dayIndex === this.currentDay
    );

    this.currentDayData = currentDayData;

    return currentDayData;
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

    this.getDataForCurrentDay();
  }

  completeCurrentDay() {
    let currentDay = this.getCurrentDay() || 0;

    currentDay++;

    this.saveCurrentDay(currentDay);

    this.getDataForCurrentDay();
  }
}
