import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../shared/service/page-title.service';
import { AlertService, AlertMessage } from '../shared/service/alert.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/dashboard2/dashboard2.component.html'
})

export class DashboardComponent2 implements OnInit {

    constructor(
        private pageTitleService: PageTitleService,
        private alertService: AlertService) {
    }

    ngOnInit() {
        this.pageTitleService.setTitle("Dashboard2");
        this.alertService.showAlert( true, 'Welcome User - Dashbaord2 Page has been loaded');
    }

    showInfo() {
        this.alertService.showAlert(true, 'Welcome User - Dashbaord2 Page has been loaded');
    }

    get diagnostic() : string {
        return JSON.stringify("dashboard2 ---diagnostic");
    }
}