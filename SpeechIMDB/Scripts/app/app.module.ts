import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { GrowlModule } from 'primeng/primeng';
import { BreadcrumbModule, MenuItem } from 'primeng/primeng';
import { NglModule } from 'ng-lightning/ng-lightning';

import { DashboardMainModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { AppRoutingModule  } from './app-routing.module';
import { PageTitleService } from './shared/service/page-title.service';
import { AlertService, ToasterService } from './shared/service/alert.service';
import { BreadcrumbService } from './shared/service/breadcrumb.service';
import { LoaderService } from './shared/service/loader.service';
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
        BreadcrumbModule,

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
        ToasterService,
        BreadcrumbService,
        LoaderService,
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

