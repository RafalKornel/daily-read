import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reading-card',
  standalone: true,
  imports: [],
  templateUrl: './reading-card.component.html',
  styleUrl: './reading-card.component.scss',
})
export class ReadingCardComponent {
  @Input() readingName!: string;
  @Input() readingTitle!: string;
  @Input() imageUrl!: string;
  @Input() variant?: 'primary' | 'secondary' | 'accent';

  constructor() {
    console.log(this.variant);
  }

  get bibleGatewayUrl() {
    return `https://biblegateway.com/passage/?search=${this.readingName}&version=NIV`;
  }
}
