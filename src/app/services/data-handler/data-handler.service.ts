import { Injectable } from '@angular/core';
import { ReadingDayModel } from '../../model/ReadingDayModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { AscensionDataParserService } from '../ascension-data-parser/ascension-data-parser.service';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  static READINGS_STORAGE_KEY = 'reading_data';
  static CURRENT_DAY_STORAGE_KEY = 'current_day';

  constructor(private http: HttpClient) {}

  get currentDayData() {
    const localData = this.localData;

    const currentDay = this.currentDay;

    const currentDayData = localData?.find((e) => e.dayIndex === currentDay);

    return currentDayData;
  }

  get currentDay() {
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

  set currentDay(day: number) {
    localStorage.setItem(
      DataHandlerService.CURRENT_DAY_STORAGE_KEY,
      String(day)
    );
  }

  completeCurrentDay() {
    this.currentDay = this.currentDay + 1;
  }

  get localData(): ReadingDayModel[] | undefined {
    const localData = localStorage.getItem(
      DataHandlerService.READINGS_STORAGE_KEY
    );

    if (!localData) return undefined;

    return AscensionDataParserService.parseStringCSV(localData);
  }

  saveLocalData(data: string) {
    localStorage.setItem(DataHandlerService.READINGS_STORAGE_KEY, data);
  }

  clearLocalData() {
    localStorage.removeItem(DataHandlerService.READINGS_STORAGE_KEY);
  }

  fetchData(url: string) {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get(url, { headers, responseType: 'text' as const }).pipe(
      tap((text) => this.saveLocalData(text)),
      map((value) => AscensionDataParserService.parseStringCSV(value))
    );
  }

  // async fetchData(url: string) {
  //   const response = await fetch(url, {
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   });

  //   const text = await response.text();

  //   this.saveLocalData(text);

  //   return AscensionDataParserService.parseStringCSV(text);
  // }
}
