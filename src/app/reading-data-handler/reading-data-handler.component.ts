import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataHandlerService } from '../data-handler/data-handler.service';
import { Observable } from 'rxjs';
import { ReadingDayModel } from '../data-handler/ReadingDayModel';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reading-data-handler',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './reading-data-handler.component.html',
  styleUrl: './reading-data-handler.component.scss',
})
export class ReadingDataHandlerComponent {
  spreadsheetId =
    '2PACX-1vQ8lV5rne65BYVKkLVaQGDMQiaDliI3MJjV13YL8Ou-hRxQzfDTOULj4440nrIzbMqrLMJVFJ0ffdkX';
  sheetId = '2078441506';
  range = 'A2:E366';

  data?: ReadingDayModel[];

  isFetching: boolean = false;

  constructor(private dataImporterService: DataHandlerService) {
    this.data = dataImporterService.getLocalData();
  }

  async handleFetchData() {
    this.isFetching = true;

    this.data = await this.dataImporterService.fetchData(
      this.spreadsheetId,
      this.sheetId,
      this.range
    );

    this.isFetching = false;
  }

  clearData() {
    this.data = undefined;
    this.dataImporterService.clearLocalData();
  }
}
