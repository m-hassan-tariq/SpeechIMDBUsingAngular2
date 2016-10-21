import { Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentInit } from '@angular/core';

import { Message } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

import { PageTitleService } from './shared/service/page-title.service';
import { AlertService, AlertMessage, ToasterService } from './shared/service/alert.service';
import { BreadcrumbService } from './shared/service/breadcrumb.service';

@Component({
    selector: 'my-app',
    templateUrl: '../../Scripts/app/app.component.html'
})

export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit, AfterContentInit {
    header: string;
    objToaster: Message[] = [];
    objAlert: AlertMessage;
    objBreadcrumbs: MenuItem[];

    constructor(
        private pageTitleService: PageTitleService,
        private alertService: AlertService,
        private toasterService: ToasterService,
        private breadcrumbService: BreadcrumbService) {

    }

    ngOnInit() {

        this.pageTitleService.title.subscribe((pageTitle: string) => {
            this.header = pageTitle;
        });

        this.alertService.alertStatus.subscribe((val: AlertMessage) => {
            this.objAlert = { show: val.show, message: val.message };
        });

        this.breadcrumbService.breadcrumbItem.subscribe((val: MenuItem[]) => {
            if (val)
                this.objBreadcrumbs = val;
        });
    }

    onCloseAlert(reason: string) {
        let objCloseAlert: AlertMessage = { show: false, message: '' };
        this.alertService.showAlert(false, null);
    }

    ngAfterViewChecked() {
    }

    ngAfterContentInit() {
    }

    ngAfterViewInit() {
        this.toasterService.toasterStatus.subscribe((val: Message) => {
            if (val)
                this.objToaster.push(val);
        });
    }

}