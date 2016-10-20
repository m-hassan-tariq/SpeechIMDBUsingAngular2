import { Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentInit } from '@angular/core';

import { Message } from 'primeng/primeng';

import { PageTitleService } from './shared/service/page-title.service';
import { AlertService, AlertMessage, ToasterService } from './shared/service/alert.service';

@Component({
    selector: 'my-app',
    templateUrl: '../../Scripts/app/app.component.html'
})

export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit, AfterContentInit {
    header: string;
    objToaster: Message[] = [];
    objAlert: AlertMessage;

    constructor(
        private pageTitleService: PageTitleService,
        private alertService: AlertService,
        private toasterService: ToasterService) {

    }

    ngOnInit() {
        this.pageTitleService.title.subscribe((pageTitle: string) => {
            this.header = pageTitle;
        });

        this.alertService.alertStatus.subscribe((val: AlertMessage) => {
            this.objAlert = { show: val.show, message: val.message };
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