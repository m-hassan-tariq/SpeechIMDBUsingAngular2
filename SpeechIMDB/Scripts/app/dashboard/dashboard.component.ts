import { Component, OnInit } from '@angular/core';

import { AlertService, AlertMessage, ToasterService } from '../shared/service/alert.service';
import { PageTitleService } from '../shared/service/page-title.service';
import { BreadcrumbService } from '../shared/service/breadcrumb.service';

import { NewsModel } from './shared/model/news.model'
import { WebApiObservableService } from '../shared/service/web-api-observable.service';
import { WebApiPromiseService } from '../shared/service/web-api-promise.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    newsList: NewsModel[];

    constructor(
        private pageTitleService: PageTitleService,
        private alertService: AlertService,
        private toasterService: ToasterService,
        private breadcrumbService: BreadcrumbService,
        private webApiObservableService: WebApiObservableService) {
        this.newsList = [];
    }

    ngOnInit() {
        this.pageTitleService.setTitle("Dashboard");
        this.alertService.showAlert(true, "Welcome User - Dashboard has been loaded");
        this.breadcrumbService.setBreadcrumbs("dashboard");
        this.populateNewsData();
    }

    populateNewsData() {
        this.webApiObservableService
            .getService("api/movie/GetMovieNews")
            .subscribe(
            (result: NewsModel[]) => {
                this.newsList = result;
                console.log(result);
                console.log(this.newsList);
            },
            (error) => {
                this.toasterService.showToaster('error', 'Oops!! An error occurred', <any>error);
            });
    }

    get diagnostic() : string {
        return JSON.stringify("dashboard ---diagnostic");
    }
}