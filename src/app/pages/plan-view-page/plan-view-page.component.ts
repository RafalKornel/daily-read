import { Component } from '@angular/core';
import { ReadingDayModel } from '../../model/ReadingDayModel';
import { DataHandlerService } from '../../services/data-handler/data-handler.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { UrlDataFetcherComponent } from '../../components/url-data-fetcher/url-data-fetcher.component';
import { ClearDataButtonComponent } from '../../components/clear-data-button/clear-data-button.component';
import { ManualProgressSetterComponent } from '../../components/manual-progress-setter/manual-progress-setter.component';

@Component({
  selector: 'app-plan-view-page',
  standalone: true,
  imports: [
    ModalComponent,
    UrlDataFetcherComponent,
    ClearDataButtonComponent,
    ManualProgressSetterComponent,
  ],
  templateUrl: './plan-view-page.component.html',
  styleUrl: './plan-view-page.component.scss',
})
export class PlanViewPageComponent {
  constructor(public dataHandlerService: DataHandlerService) {}
}
