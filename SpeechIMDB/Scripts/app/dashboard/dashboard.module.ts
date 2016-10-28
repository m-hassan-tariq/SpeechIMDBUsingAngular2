import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashbaordRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DashbaordRoutingModule
    ],
    declarations: [
        DashboardComponent
    ]
})

export class DashboardMainModule {
}