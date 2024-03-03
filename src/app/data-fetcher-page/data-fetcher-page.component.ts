import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataHandlerService } from '../data-handler/data-handler.service';
import { ReadingDayModel } from '../data-handler/ReadingDayModel';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-data-fetcher-page',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './data-fetcher-page.component.html',
  styleUrl: './reading-data-handler.component.scss',
})
export class DataFetcherPageComponent {
  url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8lV5rne65BYVKkLVaQGDMQiaDliI3MJjV13YL8Ou-hRxQzfDTOULj4440nrIzbMqrLMJVFJ0ffdkX/pub?gid=2078441506&single=true&output=csv&range=A2:E366`;

  isFetching: boolean = false;

  constructor(private dataImporterService: DataHandlerService) {}

  async handleFetchData() {
    this.isFetching = true;

    this.dataImporterService.fetchDataAngular(this.url).subscribe(() => {
      this.isFetching = false;
    });
  }

  clearData() {
    this.dataImporterService.clearLocalData();
  }
}
