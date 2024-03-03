import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataHandlerService } from '../data-handler/data-handler.service';
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
  url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8lV5rne65BYVKkLVaQGDMQiaDliI3MJjV13YL8Ou-hRxQzfDTOULj4440nrIzbMqrLMJVFJ0ffdkX/pub?gid=2078441506&single=true&output=csv&range=A2:E366`;

  data?: ReadingDayModel[];

  isFetching: boolean = false;

  constructor(private dataImporterService: DataHandlerService) {
    this.data = dataImporterService.getLocalData();
  }

  async handleFetchData() {
    this.isFetching = true;

    this.data = await this.dataImporterService.fetchData(this.url);

    this.isFetching = false;
  }

  clearData() {
    this.data = undefined;
    this.dataImporterService.clearLocalData();
  }
}
