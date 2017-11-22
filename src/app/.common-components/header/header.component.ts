import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    constructor(private router: Router) { }

    private redirect(path: string) {
        this.router.navigate([path]);
    }
}
