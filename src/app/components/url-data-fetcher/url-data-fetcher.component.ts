import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataHandlerService } from '../../services/data-handler/data-handler.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-url-data-fetcher',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './url-data-fetcher.component.html',
  styleUrl: './url-data-fetcher.component.scss',
})
export class UrlDataFetcherComponent {
  url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8lV5rne65BYVKkLVaQGDMQiaDliI3MJjV13YL8Ou-hRxQzfDTOULj4440nrIzbMqrLMJVFJ0ffdkX/pub?gid=2078441506&single=true&output=tsv&range=A2:E366`;

  isFetching: boolean = false;

  constructor(private dataImporterService: DataHandlerService) {}

  async handleFetchData() {
    this.isFetching = true;

    this.dataImporterService.fetchData(this.url).subscribe(() => {
      this.isFetching = false;
    });
  }
}
