import { Injectable } from '@angular/core';
import { ReadingDayModel } from '../../model/ReadingDayModel';
import { ReadingEntry } from '../../model/ReadingEntry';

@Injectable({
  providedIn: 'root',
})
export class AscensionDataParserService {
  constructor() {}

  static parseStringCSV(
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
