import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ToasterService } from './alert.service';
import * as _ from "lodash";


interface IWindow extends Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
}

@Injectable()
export class SpeechRecognitionService {

    constructor(private zone: NgZone,
        private toasterService: ToasterService) {
    }

    record(): Observable<string> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = <IWindow>window;
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            //recognition.interimResults = true;
            recognition.lang = 'en-US';
            recognition.maxAlternatives = 1;

            //recognition.onstart = () => {
            //    this.toasterService.showToaster("success", "Speech Search Status", "Speech Search is ACTIVATED");
            //};

            recognition.onresult = speech => {
                let term: string = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        console.log(result[0].confidence);
                        if (result[0].confidence < 0.3) {
                            this.toasterService.showToaster("warn", "Speech Search Status", "Unrecognized result - Please try again");
                        }
                        else {
                            term = _.trim(transcript);
                            this.toasterService.showToaster("success", "I'm not sure, but I think you said", term);
                        }
                    }
                }
                this.zone.run(() => {
                    observer.next(term);
                });
            };

            recognition.onerror = error => {
                observer.error(error);
            };

            recognition.onend = () => {
                observer.complete();
            };  

            recognition.start();
        });
    }

}