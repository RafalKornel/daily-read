import { Component } from '@angular/core';
import { ReadingDayModel } from './ReadingDayModel';
import { ReadingEntry } from './ReadingEntry';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reading-data-handler',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reading-data-handler.component.html',
  styleUrl: './reading-data-handler.component.scss',
})
export class ReadingDataHandlerComponent {
  spreadsheetId = '';
  sheetId = '';

  getData() {
    const spreadsheetId =
      '2PACX-1vQ8lV5rne65BYVKkLVaQGDMQiaDliI3MJjV13YL8Ou-hRxQzfDTOULj4440nrIzbMqrLMJVFJ0ffdkX';
    const sheetId = '2078441506';
    const range = 'A7:K371';

    fetch(
      `https://docs.google.com/spreadsheets/d/e/${spreadsheetId}/pub?gid=${sheetId}&single=true&output=csv&range=${range}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
      .then((response) => {
        console.log(response);
        return response.text();
        // Handle response
      })
      .then((data) => {
        console.log(data);
        console.log(
          ReadingDataHandlerComponent.parseStringCSVToReadingModel(data)
        );
      });
    // this.getSheet();
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
