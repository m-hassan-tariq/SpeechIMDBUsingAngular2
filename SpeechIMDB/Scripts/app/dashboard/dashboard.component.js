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
var alert_service_1 = require('../shared/service/alert.service');
var page_title_service_1 = require('../shared/service/page-title.service');
var breadcrumb_service_1 = require('../shared/service/breadcrumb.service');
var DashboardComponent = (function () {
    function DashboardComponent(pageTitleService, alertService, breadcrumbService) {
        this.pageTitleService = pageTitleService;
        this.alertService = alertService;
        this.breadcrumbService = breadcrumbService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Dashboard");
        this.alertService.showAlert(true, "Welcome User - Dashboard has been loaded");
        this.breadcrumbService.setBreadcrumbs("dashboard");
    };
    Object.defineProperty(DashboardComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify("dashboard ---diagnostic");
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'search-movie-list',
            templateUrl: '../../Scripts/app/dashboard/dashboard.component.html'
        }), 
        __metadata('design:paramtypes', [page_title_service_1.PageTitleService, alert_service_1.AlertService, breadcrumb_service_1.BreadcrumbService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map