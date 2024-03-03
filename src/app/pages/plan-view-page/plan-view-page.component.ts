import { Component } from '@angular/core';
import { ReadingDayModel } from '../../data-handler/ReadingDayModel';
import { DataHandlerService } from '../../data-handler/data-handler.service';

@Component({
  selector: 'app-plan-view-page',
  standalone: true,
  imports: [],
  templateUrl: './plan-view-page.component.html',
  styleUrl: './plan-view-page.component.scss',
})
export class PlanViewPageComponent {
  data?: ReadingDayModel[];

  constructor(private dataHandlerService: DataHandlerService) {
    this.data = this.dataHandlerService.getLocalData();
  }
}
