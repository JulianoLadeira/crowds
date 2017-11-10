import { MotivationComponent } from './motivation/motivation.component';
import { GraphEditorComponent } from './graph.editor/graph-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'graph-editor', component: GraphEditorComponent },
  { path: 'motivation', component: MotivationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GraphEditorComponent,
    MotivationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  private redirect(path: string): void {
    this.router.navigate([path]);
  }

}
