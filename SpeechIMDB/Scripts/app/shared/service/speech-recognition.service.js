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
var alert_service_1 = require('./alert.service');
var SpeechRecognitionService = (function () {
    function SpeechRecognitionService(zone, toasterService) {
        this.zone = zone;
        this.toasterService = toasterService;
        this.commands = [];
        var webkitSpeechRecognition = window.webkitSpeechRecognition;
        var SpeechRecognition = window.SpeechRecognition;
        this.SpeechRecognition = new webkitSpeechRecognition();
        this.activate();
    }
    SpeechRecognitionService.prototype.activate = function () {
        console.log("activate");
        this.SpeechRecognition.continuous = true;
        this.SpeechRecognition.interimResults = true;
        this.SpeechRecognition.lang = 'en-US';
        this.SpeechRecognition.maxAlternatives = 20;
        this.SpeechRecognition.onstart = this.startHandler;
        this.SpeechRecognition.onend = this.endHandler;
        this.SpeechRecognition.onresult = this.resultHandler;
        //this.SpeechRecognition.onerror = this.errorHandler;
    };
    SpeechRecognitionService.prototype.startHandler = function () {
        console.log("startHandler");
    };
    SpeechRecognitionService.prototype.endHandler = function (speechRecognition) {
        console.log("endHandler");
        console.log(speechRecognition);
        speechRecognition.target.start();
    };
    SpeechRecognitionService.prototype.resultHandler = function (event) {
        if (event.results) {
            var result = event.results[event.resultIndex];
            console.log(result);
            for (var index = 0; index < result.length; index++) {
                console.log("Transcript " + index + " : " + result[index].transcript + " (" + result[index].confidence + ") ");
            }
        }
    };
    SpeechRecognitionService.prototype.startRecognition = function () {
        if (this.SpeechRecognition) {
            this.toasterService.showToaster("success", "Speech Search Status", "Speech Search is ACTIVATED");
            this.SpeechRecognition.start();
        }
        else {
            this.toasterService.showToaster("warn", "Speech Search Status", "Speech recognition is not supported");
            throw new Error('Speech recognition is not supported');
        }
    };
    SpeechRecognitionService.prototype.stopRecognition = function () {
        if (this.SpeechRecognition) {
            this.toasterService.showToaster("warn", "Speech Search Status", "Speech Search is STOPPED");
            this.SpeechRecognition.stop();
        }
    };
    SpeechRecognitionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.NgZone, alert_service_1.ToasterService])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
}());
exports.SpeechRecognitionService = SpeechRecognitionService;
//# sourceMappingURL=speech-recognition.service.js.map