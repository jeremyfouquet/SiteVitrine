import { Component, ElementRef, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigation: Array<any> = [
    {
      link: 'home',
      translate: '_Nav_1_'
    },
    {
      link: 'menu_1',
      translate: '_Nav_2_'
    },
    {
      link: 'menu_2',
      translate: '_Nav_3_'
    },
    {
      link: 'contact',
      translate: '_Nav_4_'
    }
  ];

  languageList: Array<any> = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];

  language!: string;

  constructor(
    private languageService: LanguageService,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.language = this.languageService.getLanguage();
    const language = this.el.nativeElement;
    language.focus();
  }

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
    this.language = this.languageService.getLanguage();
  }

}
