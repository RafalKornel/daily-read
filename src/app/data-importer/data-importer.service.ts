import { Injectable } from '@angular/core';
import { ReadingDayModel } from '../data-importer/ReadingDayModel';
import { ReadingEntry } from '../data-importer/ReadingEntry';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataImporterService {
  static LOCAL_STORAGE_KEY = 'reading_data';

  constructor(private http: HttpClient) {}

  getStorageKey() {
    return DataImporterService.LOCAL_STORAGE_KEY;
  }

  getLocalData(): ReadingDayModel[] | undefined {
    const localData = localStorage.getItem(this.getStorageKey());

    if (!localData) return undefined;

    return DataImporterService.parseStringCSVToReadingModel(localData);
  }

  saveLocalData(data: string) {
    localStorage.setItem(this.getStorageKey(), data);
  }

  clearLocalData() {
    localStorage.removeItem(this.getStorageKey());
  }

  async fetchData(spreadsheetId: string, sheetId: string, range: string) {
    const url = `https://docs.google.com/spreadsheets/d/e/${spreadsheetId}/pub?gid=${sheetId}&single=true&output=csv&range=${range}`;

    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });

    const text = await response.text();

    this.saveLocalData(text);

    return DataImporterService.parseStringCSVToReadingModel(text);

    // return this.http
    //   .get<string>(url)
    //   .pipe(
    //     map((value) => DataImporterService.parseStringCSVToReadingModel(value))
    //   );
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
          completed,
          dayString,
          ,
          period,
          firstReadingString,
          ,
          secondReadingString,
          ,
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
