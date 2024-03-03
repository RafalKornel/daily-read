import { Injectable } from '@angular/core';
import { ReadingDayModel } from './ReadingDayModel';
import { ReadingEntry } from './ReadingEntry';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  static READINGS_STORAGE_KEY = 'reading_data';
  static CURRENT_DAY_STORAGE_KEY = 'current_day';

  constructor() {
    this.getDataForCurrentDay();
  }

  getCurrentDay() {
    const value = localStorage.getItem(
      DataHandlerService.CURRENT_DAY_STORAGE_KEY
    );

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

  getDataForCurrentDay() {
    const localData = this.getLocalData();

    const currentDay = this.getCurrentDay();

    const currentDayData = localData?.find((e) => e.dayIndex === currentDay);

    return currentDayData;
  }

  saveCurrentDay(day: number) {
    localStorage.setItem(
      DataHandlerService.CURRENT_DAY_STORAGE_KEY,
      String(day)
    );

    this.getDataForCurrentDay();
  }

  completeCurrentDay() {
    let currentDay = this.getCurrentDay() || 0;

    currentDay++;

    this.saveCurrentDay(currentDay);

    this.getDataForCurrentDay();
  }

  getLocalData(): ReadingDayModel[] | undefined {
    const localData = localStorage.getItem(
      DataHandlerService.READINGS_STORAGE_KEY
    );

    if (!localData) return undefined;

    return DataHandlerService.parseStringCSVToReadingModel(localData);
  }

  saveLocalData(data: string) {
    localStorage.setItem(DataHandlerService.READINGS_STORAGE_KEY, data);
  }

  clearLocalData() {
    localStorage.removeItem(DataHandlerService.READINGS_STORAGE_KEY);
  }

  async fetchData(url: string) {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    const text = await response.text();

    this.saveLocalData(text);

    return DataHandlerService.parseStringCSVToReadingModel(text);
  }

  static parseStringCSVToReadingModel(
    csvAsString: string,
    delimeter = ','
  ): ReadingDayModel[] {
    let entries: ReadingDayModel[] = [];
    let currentPeriod = '';

    try {
      const lines = csvAsString.split('\n');

      lines.forEach((line) => {
        const [
          dayString,
          period,
          firstReadingString,
          secondReadingString,
          thirdReadingString,
        ] = line.split(delimeter);

        if (period) {
          currentPeriod = period;
        }

        const dayIndex = Number.parseInt(dayString.replace('Day ', ''));

        const dayEntry = new ReadingDayModel(
          false,
          dayIndex,
          currentPeriod,
          new ReadingEntry(firstReadingString),
          secondReadingString
            ? new ReadingEntry(secondReadingString)
            : undefined,
          new ReadingEntry(thirdReadingString)
        );

        dayEntry.validate();

        entries.push(dayEntry);
      });
    } catch (e) {
      console.error(e);
    }

    return entries;
  }
}
