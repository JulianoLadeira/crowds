import { AbstractComponent } from './../.abstract-component/abstract.component';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-motivation',
    templateUrl: './motivation.component.html'
})
export class MotivationComponent extends AbstractComponent {

    public constructor (
        protected titleService: Title,
        protected route: ActivatedRoute
    ) {
            super(titleService, route);
    }

 }
