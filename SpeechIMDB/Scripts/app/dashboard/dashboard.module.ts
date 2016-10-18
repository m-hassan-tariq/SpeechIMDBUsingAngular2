import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashbaordRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        FormsModule,
        DashbaordRoutingModule
    ],
    declarations: [
        DashboardComponent
    ]
})

export class DashboardMainModule {
}