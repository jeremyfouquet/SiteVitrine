import { Component, Input } from '@angular/core';
import { SectionTwoDataModel } from 'src/app/models';

@Component({
  selector: 'app-section-page-format-two',
  templateUrl: './section-page-format-two.component.html',
  styleUrls: ['./section-page-format-two.component.scss']
})
export class SectionPageFormatTwoComponent {
  @Input() sectionTwoData: SectionTwoDataModel;

}
