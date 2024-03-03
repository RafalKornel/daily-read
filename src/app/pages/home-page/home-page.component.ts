import { Component } from '@angular/core';
import { DataHandlerService } from '../../data-handler/data-handler.service';
import { FormsModule } from '@angular/forms';
import { ReadingDayModel } from '../../data-handler/ReadingDayModel';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  static CURRENT_DAY_STORAGE_KEY = 'current_day_key';

  currentDayData?: ReadingDayModel;

  constructor(private dataHandlerService: DataHandlerService) {
    this.updateCurrentDayData();
  }

  updateCurrentDayData() {
    const currentDayData = this.dataHandlerService.getDataForCurrentDay();
    this.currentDayData = currentDayData;
  }

  get currentDay() {
    return this.dataHandlerService.getCurrentDay();
  }

  set currentDay(day: number | string) {
    day = typeof day === 'string' ? Number.parseInt(day) : day;

    this.dataHandlerService.saveCurrentDay(day);
  }

  completeCurrentDay() {
    this.dataHandlerService.completeCurrentDay();
  }
}
