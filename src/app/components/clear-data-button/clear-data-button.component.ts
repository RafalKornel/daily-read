import { Component } from '@angular/core';
import { DataHandlerService } from '../../services/data-handler/data-handler.service';

@Component({
  selector: 'app-clear-data-button',
  standalone: true,
  imports: [],
  templateUrl: './clear-data-button.component.html',
  styleUrl: './clear-data-button.component.scss',
})
export class ClearDataButtonComponent {
  constructor(private dataImporterService: DataHandlerService) {}

  clearData() {
    this.dataImporterService.clearLocalData();
  }
}
