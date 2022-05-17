import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HostListener } from '@angular/core';

@Component({
    selector: 'view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ViewComponent {
    currentUrl: string;
    contactIsVisible: boolean;

    constructor(
        private readonly router: Router
      ) {
        router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        )
        .subscribe(event => {
            this.currentUrl = router.url.replace('/view', '');
            if (
                this.currentUrl === '/home' ||
                this.currentUrl === '/menu_1'
            ) {
                this.contactIsVisible = true;
            } else if (this.currentUrl === '') {
                router.navigate(['home']);
            } else {
                this.contactIsVisible = false;
            }
        });
      }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e: any) {
        const element = document.getElementById('navigation');
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('nav-visible');
        } else {
            element.classList.remove('nav-visible');
        }
    }

    onActivate(event: any) {
        window.scroll(0, 0);
    }
}
