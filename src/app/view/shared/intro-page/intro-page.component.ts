import { Component, Input } from '@angular/core';
import { IntroPagedModel } from 'src/app/models';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent {
  @Input() introPageContaint: IntroPagedModel;
}
