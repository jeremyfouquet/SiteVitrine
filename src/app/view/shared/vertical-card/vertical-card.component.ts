import { Component, Input } from '@angular/core';
import { VerticalCardModel } from 'src/app/models';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent {
  @Input() containtAndStyle: VerticalCardModel;

}
