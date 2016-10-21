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
var page_title_service_1 = require('../shared/service/page-title.service');
var alert_service_1 = require('../shared/service/alert.service');
var breadcrumb_service_1 = require('../shared/service/breadcrumb.service');
var DashboardComponent2 = (function () {
    function DashboardComponent2(pageTitleService, toasterService, breadcrumbService) {
        this.pageTitleService = pageTitleService;
        this.toasterService = toasterService;
        this.breadcrumbService = breadcrumbService;
    }
    DashboardComponent2.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Dashboard2");
        this.toasterService.showToaster("info", "Homepage", "Dashboard has been loaded");
        this.breadcrumbService.setBreadcrumbs("dashboard2");
    };
    Object.defineProperty(DashboardComponent2.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify("dashboard2 ---diagnostic");
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent2 = __decorate([
        core_1.Component({
            selector: 'search-movie-list',
            templateUrl: '../../Scripts/app/dashboard2/dashboard2.component.html'
        }), 
        __metadata('design:paramtypes', [page_title_service_1.PageTitleService, alert_service_1.ToasterService, breadcrumb_service_1.BreadcrumbService])
    ], DashboardComponent2);
    return DashboardComponent2;
}());
exports.DashboardComponent2 = DashboardComponent2;
//# sourceMappingURL=dashboard2.component.js.map