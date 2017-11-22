import { FundamentsComponent } from './fundaments/fundaments.component';
import { MotivationComponent } from './motivation/motivation.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: IntroductionComponent, data: { title : 'Introdução' } },
            { path: 'motivation', component: MotivationComponent, data: { title : 'Motivação' } },
            { path: 'fundaments', component: FundamentsComponent, data: { title : 'Fundamentos' } },
            { path: 'applications', loadChildren: './applications/applications.module#ApplicationsModule' }
        ],
        { useHash: true }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
