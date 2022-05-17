import { Component, Input } from '@angular/core';
import { SectionOneDataModel } from 'src/app/models';

@Component({
  selector: 'app-section-page-format-one',
  templateUrl: './section-page-format-one.component.html',
  styleUrls: ['./section-page-format-one.component.scss']
})
export class SectionPageFormatOneComponent {
  @Input() sectionOneData: SectionOneDataModel;

}
