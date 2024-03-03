import { Component } from '@angular/core';
import { DataHandlerService } from '../../services/data-handler/data-handler.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  static CURRENT_DAY_STORAGE_KEY = 'current_day_key';

  constructor(public dataHandlerService: DataHandlerService) {}
}
