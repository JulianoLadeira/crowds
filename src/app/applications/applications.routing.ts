import { GraphEditorComponent } from './graph.editor/graph-editor.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'graph-editor',
                component: GraphEditorComponent,
                data: { title: 'Editor de Entradas' }
            },
        ]
    )],
    exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
