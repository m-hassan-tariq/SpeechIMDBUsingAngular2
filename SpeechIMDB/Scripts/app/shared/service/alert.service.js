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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var AlertMessage = (function () {
    function AlertMessage() {
    }
    return AlertMessage;
}());
exports.AlertMessage = AlertMessage;
var AlertService = (function () {
    function AlertService() {
        this.alertStatus = new BehaviorSubject_1.BehaviorSubject({ show: false, message: null });
    }
    AlertService.prototype.showAlert = function (isShow, msg) {
        var alertObj = { show: isShow, message: msg };
        this.alertStatus.next(alertObj);
    };
    AlertService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
var ToasterService = (function () {
    function ToasterService() {
        this.toasterStatus = new BehaviorSubject_1.BehaviorSubject(null);
    }
    //type: success, info, warn, error
    ToasterService.prototype.showToaster = function (type, header, content) {
        var toasterObj = { severity: type, summary: header, detail: content };
        this.toasterStatus.next(toasterObj);
    };
    ToasterService.prototype.hideToaster = function () {
        this.toasterStatus.next(null);
    };
    ToasterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ToasterService);
    return ToasterService;
}());
exports.ToasterService = ToasterService;
//# sourceMappingURL=alert.service.js.map