import { GraphEditorComponent } from './graph.editor/graph-editor.component';
import { ApplicationsRoutingModule } from './applications.routing';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
      GraphEditorComponent
    ],
    imports: [
      ApplicationsRoutingModule,
    ],
    exports: [GraphEditorComponent]
  })
export class ApplicationsModule { }
