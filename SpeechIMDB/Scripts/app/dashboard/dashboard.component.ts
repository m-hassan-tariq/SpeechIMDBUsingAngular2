import { Component, OnInit } from '@angular/core';

import { AlertService, AlertMessage, ToasterService } from '../shared/service/alert.service';
import { PageTitleService } from '../shared/service/page-title.service';
import { BreadcrumbService } from '../shared/service/breadcrumb.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    constructor(
        private pageTitleService: PageTitleService,
        private alertService: AlertService,
        private breadcrumbService: BreadcrumbService) {
    }

    ngOnInit() {
        this.pageTitleService.setTitle("Dashboard");
        this.alertService.showAlert(true, "Welcome User - Dashboard has been loaded");
        this.breadcrumbService.setBreadcrumbs("dashboard");
    }

    get diagnostic() : string {
        return JSON.stringify("dashboard ---diagnostic");
    }
}