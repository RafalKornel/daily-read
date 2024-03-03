import { Component } from '@angular/core';
import { DataHandlerService } from '../../services/data-handler/data-handler.service';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '../../app.routes';
import { ReadingCardComponent } from '../../components/reading-card/reading-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ReadingCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  static CURRENT_DAY_STORAGE_KEY = 'current_day_key';

  PlanViewerRoute = `/${AppRoutes.PlanViewer}`;

  constructor(public dataHandlerService: DataHandlerService) {}

  get ratio() {
    const ratioPercent =
      (this.dataHandlerService.currentDay / this.dataHandlerService.maxDay) *
      100;

    return ratioPercent.toFixed(0);
  }
}
