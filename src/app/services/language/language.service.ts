import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {
    private _languages: Array<string> = ['en', 'fr'];

    constructor(private translate: TranslateService) {
    }

    public init(): void {

        this.translate.addLangs(this._languages);
        for (let i: number = 0; i < this._languages.length; i++) {
            // tslint:disable-next-line:no-require-imports
            this.translate.setTranslation(this._languages[i], require('../../../i18n/' + this._languages[i] + '.json'), true);
        }
        this.translate.setDefaultLang('fr');
        this.translate.use('fr');
    }

    public setLanguage(language: string): void {
        if (this._languages.indexOf(language) > -1) {
            this.translate.use(language);
        } else {
            console.error('ERROR -> LanguageService : ' + language + ' is not a known language');
        }
    }

    public getLanguage(): string {
        return this.translate.currentLang;
    }
}
