import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Message } from 'primeng/primeng';

export class AlertMessage {
    public show: boolean;
    public message: string;
}

@Injectable()
export class AlertService {
    public alertStatus: BehaviorSubject<AlertMessage> = new BehaviorSubject<AlertMessage>({ show: false, message: null });

    showAlert(isShow: boolean, msg: string) {
        let alertObj: AlertMessage = { show: isShow, message: msg };
        this.alertStatus.next(alertObj);
    }
}

@Injectable()
export class ToasterService {
    public toasterStatus: BehaviorSubject<Message> = new BehaviorSubject<Message>(null);

    //type: success, info, warn, error
    showToaster(type: string, header: string, content: string) {
        let toasterObj: Message = { severity: type, summary: header, detail: content };
        this.toasterStatus.next(toasterObj);
    }

    hideToaster() {
        this.toasterStatus.next(null);
    }
}