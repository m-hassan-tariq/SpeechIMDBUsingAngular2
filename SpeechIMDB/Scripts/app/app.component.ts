import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

import { PageTitleService } from './shared/service/page-title.service';
import { AlertService, AlertMessage } from './shared/service/alert.service';

@Component({
    selector: 'my-app',
    templateUrl: '../../Scripts/app/app.component.html'
})

export class AppComponent implements OnInit, AfterViewChecked {
    header: string;
    objAlert: AlertMessage;

    constructor(
        private pageTitleService: PageTitleService,
        private alertService: AlertService) {
        
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
        //console.log("new ngAfterViewChecked: " + this.pageTitleService.getTitle())
    }
    
}