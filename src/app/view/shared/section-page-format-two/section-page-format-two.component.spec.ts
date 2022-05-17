import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPageFormatTwoComponent } from './section-page-format-two.component';

describe('SectionPageFormatTwoComponent', () => {
  let component: SectionPageFormatTwoComponent;
  let fixture: ComponentFixture<SectionPageFormatTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPageFormatTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPageFormatTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
