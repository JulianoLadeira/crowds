import { IntroductionComponent } from './introduction/introduction.component';
import { CommonComponentsModule } from './.common-components/common-components.module';
import { AppRoutingModule } from './app.routing';
import { MotivationComponent } from './motivation/motivation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationsModule } from './applications/applications.module';
import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    MotivationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule,
    ApplicationsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
