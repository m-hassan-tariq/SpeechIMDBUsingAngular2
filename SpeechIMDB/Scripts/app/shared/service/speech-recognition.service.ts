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

    SpeechRecognition: any;
    commands: any = [];
    noMatchCallback: any;
    unrecognizedCallback: any;

    constructor(private zone: NgZone,
        private toasterService: ToasterService) {
        const { webkitSpeechRecognition }: IWindow = <IWindow>window;
        const { SpeechRecognition }: IWindow = <IWindow>window;
        this.SpeechRecognition = new webkitSpeechRecognition();
        this.activate();
    }

    activate() {
        console.log("activate");
        this.SpeechRecognition.continuous = true;
        this.SpeechRecognition.interimResults = true;
        this.SpeechRecognition.lang = 'en-US';
        this.SpeechRecognition.maxAlternatives = 20;

        this.SpeechRecognition.onstart = this.startHandler;
        this.SpeechRecognition.onend = this.endHandler;
        this.SpeechRecognition.onresult = this.resultHandler;
        //this.SpeechRecognition.onerror = this.errorHandler;
    }

    startHandler() {
        console.log("startHandler");
    }

    endHandler(speechRecognition: any) {
        console.log("endHandler");
        console.log(speechRecognition)
        speechRecognition.target.start();

    }

    resultHandler(event) {
        if (event.results) {
            var result = event.results[event.resultIndex];
            console.log(result)
            for (var index = 0; index < result.length; index++) {
                console.log("Transcript " + index + " : " + result[index].transcript + " (" + result[index].confidence + ") ")
            }


            //var transcript = result[0].transcript;

            //if (result.isFinal) {
            //    if (result[0].confidence < .5) {
            //        if (unrecognizedCallback) {
            //            unrecognizedCallback(transcript);
            //        }
            //        else {
            //            console.log('Unrecognized result: ' + transcript);
            //        }
            //    }
            //    else {
            //        var match = _.find(this.commands,
            //            { text: _.toLower(_.trim(transcript)) });

            //        if (match) {
            //            match.callback();
            //        }
            //        else if (noMatchCallback) {
            //            noMatchCallback(transcript);
            //        }
            //        else {
            //            console.log("No matching command was found for '" +
            //                transcript + "'");
            //        }
            //    }
            //}
        }
    }

    startRecognition() {
        if (this.SpeechRecognition) {
            this.toasterService.showToaster("success", "Speech Search Status", "Speech Search is ACTIVATED");
            this.SpeechRecognition.start();
        }
        else {
            this.toasterService.showToaster("warn", "Speech Search Status", "Speech recognition is not supported");
            throw new Error('Speech recognition is not supported');
        }
    }

    stopRecognition() {
        if (this.SpeechRecognition) {
            this.toasterService.showToaster("warn", "Speech Search Status", "Speech Search is STOPPED");
            this.SpeechRecognition.stop();
        }
    }

    //record(language: string): Observable<string> {
    //    return Observable.create(observer => {
    //        const { webkitSpeechRecognition }: IWindow = <IWindow>window;
    //        const recognition = new webkitSpeechRecognition();
    //        recognition.continuous = true;
    //        recognition.interimResults = true;

    //        recognition.onresult = e => this.zone.run(() => observer.next(e.results.item(e.results.length - 1).item(0).transcript));
    //        recognition.onerror = e => observer.error(e);
    //        recognition.onend = () => observer.complete();
    //        //recognition.lang = language;
    //        recognition.start();
    //        console.log("its started")
    //    });
    //}

}