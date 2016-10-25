import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { GrowlModule } from 'primeng/primeng';
import { BreadcrumbModule, MenuItem } from 'primeng/primeng';
import { NglModule } from 'ng-lightning/ng-lightning';

import { DashboardMainModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { AppRoutingModule  } from './app.routing';
import { APP_PROVIDERS } from './app.provider';

@NgModule({
    imports: [
        //angular builtin module
        BrowserModule,
        HttpModule,

        //ui module
        NglModule.forRoot(),
        GrowlModule,
        BreadcrumbModule,

        //application feature module
        DashboardMainModule,
        AppRoutingModule 
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        APP_PROVIDERS
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppModule {
}

