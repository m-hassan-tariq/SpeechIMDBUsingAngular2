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
var page_title_service_1 = require('./shared/service/page-title.service');
var alert_service_1 = require('./shared/service/alert.service');
var AppComponent = (function () {
    function AppComponent(pageTitleService, alertService, toasterService) {
        this.pageTitleService = pageTitleService;
        this.alertService = alertService;
        this.toasterService = toasterService;
        this.objToaster = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.title.subscribe(function (pageTitle) {
            _this.header = pageTitle;
        });
        this.alertService.alertStatus.subscribe(function (val) {
            _this.objAlert = { show: val.show, message: val.message };
        });
    };
    AppComponent.prototype.onCloseAlert = function (reason) {
        var objCloseAlert = { show: false, message: '' };
        this.alertService.showAlert(false, null);
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
    };
    AppComponent.prototype.ngAfterContentInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.toasterService.toasterStatus.subscribe(function (val) {
            if (val)
                _this.objToaster.push(val);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../../Scripts/app/app.component.html'
        }), 
        __metadata('design:paramtypes', [page_title_service_1.PageTitleService, alert_service_1.AlertService, alert_service_1.ToasterService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map