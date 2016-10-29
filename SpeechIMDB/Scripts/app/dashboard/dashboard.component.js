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
var web_api_observable_service_1 = require('../shared/service/web-api-observable.service');
var DashboardComponent = (function () {
    function DashboardComponent(pageTitleService, alertService, toasterService, breadcrumbService, webApiObservableService) {
        this.pageTitleService = pageTitleService;
        this.alertService = alertService;
        this.toasterService = toasterService;
        this.breadcrumbService = breadcrumbService;
        this.webApiObservableService = webApiObservableService;
        this.newsList = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Movie Database Portal");
        this.alertService.showAlert(true, "Welcome User - Dashboard has been loaded");
        this.breadcrumbService.setBreadcrumbs("dashboard");
        this.populateNewsData();
    };
    DashboardComponent.prototype.populateNewsData = function () {
        var _this = this;
        this.webApiObservableService
            .getService("api/movie/GetMovieNews")
            .subscribe(function (result) {
            _this.newsList = result;
        }, function (error) {
            _this.toasterService.showToaster('error', 'Oops!! An error occurred', error);
        });
    };
    DashboardComponent.prototype.displaySource = function (source) {
        this.toasterService.showToaster('success', 'Source of the news is ...', source);
    };
    Object.defineProperty(DashboardComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.newsList);
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'search-movie-list',
            templateUrl: '../../Scripts/app/dashboard/dashboard.component.html',
            styleUrls: ['../../Scripts/app/dashboard/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [page_title_service_1.PageTitleService, alert_service_1.AlertService, alert_service_1.ToasterService, breadcrumb_service_1.BreadcrumbService, web_api_observable_service_1.WebApiObservableService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map