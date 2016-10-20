import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../shared/service/page-title.service';
import { ToasterService } from '../shared/service/alert.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/dashboard2/dashboard2.component.html'
})

export class DashboardComponent2 implements OnInit {

    constructor(
        private pageTitleService: PageTitleService,
        private toasterService: ToasterService) {
    }

    ngOnInit() {
        this.pageTitleService.setTitle("Dashboard2");
        this.toasterService.showToaster("info", "Homepage", "Dashboard has been loaded");
    }

    get diagnostic() : string {
        return JSON.stringify("dashboard2 ---diagnostic");
    }
}