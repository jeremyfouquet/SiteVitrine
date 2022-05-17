import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPageFormatOneComponent } from './section-page-format-one.component';

describe('SectionPageFormatOneComponent', () => {
  let component: SectionPageFormatOneComponent;
  let fixture: ComponentFixture<SectionPageFormatOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPageFormatOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPageFormatOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
