import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent2 } from './dashboard2.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'dashboard2/home', component: DashboardComponent2 }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class DashbaordRoutingModule { }
