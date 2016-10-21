import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/primeng';

import { PageTitleService } from '../shared/service/page-title.service';
import { ToasterService } from '../shared/service/alert.service';
import { BreadcrumbService } from '../shared/service/breadcrumb.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/dashboard2/dashboard2.component.html'
})

export class DashboardComponent2 implements OnInit {
    private itemBreadcrums: MenuItem[];

    constructor(
        private pageTitleService: PageTitleService,
        private toasterService: ToasterService,
        private breadcrumbService: BreadcrumbService) {
    }

    ngOnInit() {
        this.pageTitleService.setTitle("Dashboard2");
        this.toasterService.showToaster("info", "Homepage", "Dashboard has been loaded");
        this.breadcrumbService.setBreadcrumbs("dashboard2");
    }

    get diagnostic() : string {
        return JSON.stringify("dashboard2 ---diagnostic");
    }
}