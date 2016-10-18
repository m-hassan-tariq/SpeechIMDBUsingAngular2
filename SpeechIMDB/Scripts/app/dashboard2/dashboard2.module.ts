import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashbaordRoutingModule } from './dashboard2-routing.module';
import { DashboardComponent2 } from './dashboard2.component';

@NgModule({
    imports: [
        FormsModule,
        DashbaordRoutingModule
    ],
    declarations: [
        DashboardComponent2
    ]
})

export class DashboardMainModule {
}