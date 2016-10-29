"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var alert_service_1 = require('./alert.service');
var _ = require("lodash");
var SpeechRecognitionService = (function () {
    function SpeechRecognitionService(zone, toasterService) {
        this.zone = zone;
        this.toasterService = toasterService;
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            //this.speechRecognition = SpeechRecognition;
            _this.speechRecognition.continuous = true;
            //this.speechRecognition.interimResults = true;
            _this.speechRecognition.lang = 'en-us';
            _this.speechRecognition.maxAlternatives = 1;
            //recognition.onstart = () => {
            //    this.toasterService.showToaster("success", "Speech Search Status", "Speech Search is ACTIVATED");
            //};
            _this.speechRecognition.onresult = function (speech) {
                var term = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            _this.toasterService.showToaster("warn", "Speech Search Status", "Unrecognized result - Please try again");
                        }
                        else {
                            term = _.trim(transcript);
                            _this.toasterService.showToaster("success", "Info", "Did you said? -> " + term + " , If not then say something else...");
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
            _this.toasterService.showToaster("success", "Speech Search Status", "Say something - We are listening !!!");
        });
    };
    SpeechRecognitionService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    };
    SpeechRecognitionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.NgZone, alert_service_1.ToasterService])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
}());
exports.SpeechRecognitionService = SpeechRecognitionService;
//# sourceMappingURL=speech-recognition.service.js.map