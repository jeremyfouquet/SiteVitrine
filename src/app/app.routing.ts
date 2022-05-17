import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { ViewComponent } from './view/view.component';
import { ContactComponent } from './view/contact/contact.component';
import { ConditionGeneralesComponent } from './view/condition-generales/condition-generales.component';
import { Page404Component } from './view/page404/page404.component';
import { MenuOneComponent } from './view/menu-one/menu-one.component';
import { MenuTwoComponent } from './view/menu-two/menu-two.component';

const appRoutes: Routes = [
    {
        path: 'view',
        component: ViewComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'menu_1',
                component: MenuOneComponent
            },
            {
                path: 'menu_2',
                component: MenuTwoComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'condition-generales',
                component: ConditionGeneralesComponent
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view/home'
    },
    {
        path: '**',
        pathMatch: 'full',
        component: Page404Component
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
