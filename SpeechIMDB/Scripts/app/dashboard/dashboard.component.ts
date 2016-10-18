import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../shared/service/page-title.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    constructor(
        private pageTitleService: PageTitleService) {
    }

    ngOnInit() {
        this.pageTitleService.setTitle("Dashboard");
    }

    get diagnostic() : string {
        return JSON.stringify("dashboard ---diagnostic");
    }
}