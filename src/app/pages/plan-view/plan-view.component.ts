import { Component } from '@angular/core';
import { ReadingDayModel } from '../../services/data-handler/ReadingDayModel';
import { DataHandlerService } from '../../services/data-handler/data-handler.service';

@Component({
  selector: 'app-plan-view',
  standalone: true,
  imports: [],
  templateUrl: './plan-view.component.html',
  styleUrl: './plan-view.component.scss',
})
export class PlanViewComponent {
  data?: ReadingDayModel[];

  constructor(private dataHandlerService: DataHandlerService) {
    this.data = this.dataHandlerService.getLocalData();
  }
}
