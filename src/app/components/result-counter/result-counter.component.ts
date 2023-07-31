import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-counter',
  templateUrl: './result-counter.component.html',
  styleUrls: ['./result-counter.component.scss']
})
export class ResultCounterComponent {
  @Input() correctResponses: number = 0;
}
