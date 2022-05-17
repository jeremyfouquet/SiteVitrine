import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  currentUrl: string;

  constructor(
    private readonly location: Location) {
  }

  ngOnInit() {
  }

  public back(): void {
    this.location.back();
  }

}
