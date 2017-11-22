import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AbstractComponent } from './../.abstract-component/abstract.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-fundaments',
    templateUrl: './fundaments.component.html'
})
export class FundamentsComponent extends AbstractComponent {

    public constructor (
        protected titleService: Title,
        protected route: ActivatedRoute
    ) {
            super(titleService, route);
    }
}
