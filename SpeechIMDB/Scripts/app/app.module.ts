import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { GrowlModule } from 'primeng/primeng';
import { NglModule } from 'ng-lightning/ng-lightning';

import { DashboardMainModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { AppRoutingModule  } from './app-routing.module';
import { PageTitleService } from './shared/service/page-title.service';
import { AlertService } from './shared/service/alert.service';
import { WebApiObservableService } from './shared/service/web-api-observable.service';
import { WebApiPromiseService } from './shared/service/web-api-promise.service';

@NgModule({
    imports: [
        //angular builtin module
        BrowserModule,
        HttpModule,

        //ui module
        NglModule.forRoot(),
        GrowlModule,

        //application feature module
        DashboardMainModule,
        AppRoutingModule 
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        PageTitleService,
        AlertService,
        WebApiObservableService,
        WebApiPromiseService
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

