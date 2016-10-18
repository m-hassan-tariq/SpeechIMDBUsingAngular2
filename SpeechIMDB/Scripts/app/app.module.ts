import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardMainModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { AppRoutingModule  } from './app-routing.module';
import { PageTitleService } from './shared/service/page-title.service';
import { WebApiObservableService } from './shared/service/web-api-observable.service';
import { WebApiPromiseService } from './shared/service/web-api-promise.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        DashboardMainModule,
        AppRoutingModule 
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        PageTitleService,
        WebApiObservableService,
        WebApiPromiseService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

