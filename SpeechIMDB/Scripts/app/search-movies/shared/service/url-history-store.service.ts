import { Injectable } from '@angular/core';

@Injectable()
export class UrlHistoryService {
    private urlHistory: string;

    constructor() {
        this.urlHistory = "";
    }

    public setUrlHistoryObj(val: string): void {
        this.urlHistory = val;
    }

    public getUrlHistoryObj(): string {
        return this.urlHistory;
    }

}