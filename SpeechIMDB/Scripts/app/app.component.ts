import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';

import { PageTitleService } from './shared/service/page-title.service';

@Component({
    selector: 'my-app',
    templateUrl: '../../Scripts/app/app.component.html'
})

export class AppComponent implements OnInit, AfterViewChecked {
    header: string;

    constructor(private pageTitleService: PageTitleService) {
        
    }

    ngOnInit() {    
        this.pageTitleService.title.subscribe((pageTitle: string) => {
            this.header = pageTitle;
        }); 
    }

    ngAfterViewChecked() {
        //console.log("new ngAfterViewChecked: " + this.pageTitleService.getTitle())
    }
    
}