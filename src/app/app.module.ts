import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './view/home/home.component';
import { ViewComponent } from './view/view.component';
import { NavigationComponent } from './view/shared/navigation/navigation.component';
import { FooterComponent } from './view/shared/footer/footer.component';
import { VerticalCardComponent } from './view/shared/vertical-card/vertical-card.component';
import { ContactUsComponent } from './view/shared/contact-us/contact-us.component';
import { IntroPageComponent } from './view/shared/intro-page/intro-page.component';
import { SectionPageFormatOneComponent } from './view/shared/section-page-format-one/section-page-format-one.component';
import { SectionPageFormatTwoComponent } from './view/shared/section-page-format-two/section-page-format-two.component';
import { ContactComponent } from './view/contact/contact.component';

import { ErrorService } from './services/error/error.service';
import { LanguageService } from './services/language/language.service';
import { ConditionGeneralesComponent } from './view/condition-generales/condition-generales.component';
import { Page404Component } from './view/page404/page404.component';
import { MenuOneComponent } from './view/menu-one/menu-one.component';
import { MenuTwoComponent } from './view/menu-two/menu-two.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RoutingModule,
        TranslateModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ViewComponent,
        NavigationComponent,
        FooterComponent,
        VerticalCardComponent,
        ContactUsComponent,
        MenuOneComponent,
        IntroPageComponent,
        SectionPageFormatOneComponent,
        MenuTwoComponent,
        SectionPageFormatTwoComponent,
        ContactComponent,
        ConditionGeneralesComponent,
        Page404Component
    ],
    providers: [
        ErrorService,
        LanguageService,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
