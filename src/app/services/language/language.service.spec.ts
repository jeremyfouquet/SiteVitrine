import {
    TestBed,
    getTestBed
} from '@angular/core/testing';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
    let translate: TranslateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot()
            ],
            providers: [
                LanguageService
            ]
        });
        translate = getTestBed().get(TranslateService);
    });

    it('should init language', done => {
        new LanguageService(translate).init();
        expect(translate.getLangs().length).toEqual(2);
        expect(translate.getDefaultLang()).toEqual('fr');
        expect(translate.currentLang).toEqual('fr');
        done();
    });
});
