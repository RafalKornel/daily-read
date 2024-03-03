import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataHandlerService } from '../../services/data-handler/data-handler.service';

@Component({
  selector: 'app-manual-progress-setter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manual-progress-setter.component.html',
  styleUrl: './manual-progress-setter.component.scss',
})
export class ManualProgressSetterComponent {
  constructor(public dataHandlerService: DataHandlerService) {}
}
