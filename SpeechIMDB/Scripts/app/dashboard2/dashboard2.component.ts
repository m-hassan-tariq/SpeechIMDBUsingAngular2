import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../shared/service/page-title.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/dashboard2/dashboard2.component.html'
})

export class DashboardComponent2 implements OnInit {

    constructor(
        private pageTitleService: PageTitleService) {
    }

    ngOnInit() {
        this.pageTitleService.setTitle("Dashboard2");
    }

    get diagnostic() : string {
        return JSON.stringify("dashboard2 ---diagnostic");
    }
}