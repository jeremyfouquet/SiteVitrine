import { Component } from '@angular/core';

import { LanguageService } from './services/language/language.service';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {
    constructor(
        private languageService: LanguageService
    ) {
        this.languageService.init();
    }
}
