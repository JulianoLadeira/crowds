import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]})
export class CommonComponentsModule { }
