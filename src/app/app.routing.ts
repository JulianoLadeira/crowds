import { MotivationComponent } from './motivation/motivation.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'introduction', component: IntroductionComponent, data: { title : 'Hello Again John' } },
            { path: 'motivation', component: MotivationComponent },
            { path: 'applications', loadChildren: './applications/applications.module#ApplicationsModule' }
        ],
        { useHash: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
