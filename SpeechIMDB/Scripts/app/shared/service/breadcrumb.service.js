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
var url_history_store_service_1 = require('../../search-movies/shared/service/url-history-store.service');
var _ = require("lodash");
var BreadcrumItem = (function () {
    function BreadcrumItem() {
    }
    return BreadcrumItem;
}());
var BreadcrumbService = (function () {
    function BreadcrumbService(urlHistoryService) {
        this.urlHistoryService = urlHistoryService;
        this.breadcrumbItem = new BehaviorSubject_1.BehaviorSubject([]);
    }
    BreadcrumbService.prototype.setBreadcrumbs = function (page) {
        this.itemBreadcrums = [];
        var refList = this.getBreadcrumsLink(page);
        this.breadcrumbItem.next(refList);
    };
    BreadcrumbService.prototype.getBreadcrumsLink = function (page) {
        this.itemBreadcrums = [];
        var item = this.getsearchMoviePage();
        switch (page) {
            case 'dashboard':
                this.itemBreadcrums.push({ label: 'Dashboard' });
                break;
            case 'searchMovie':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: 'Search Movie' });
                break;
            case 'speechSearchMovie':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: 'Speech Search Movie' });
                break;
            case 'movieList':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: item.label, routerLink: [item.link] });
                this.itemBreadcrums.push({ label: 'Search Movie List' });
                break;
            case 'movieDetail':
                this.itemBreadcrums.push({ label: 'Dashboard', routerLink: ['dashboard/home'] });
                this.itemBreadcrums.push({ label: item.label, routerLink: [item.link] });
                this.itemBreadcrums.push({ label: 'Search Movie List', routerLink: ['movie/searchMovieList'] });
                this.itemBreadcrums.push({ label: 'Search Movie Detail' });
                break;
            default:
                this.itemBreadcrums = [];
        }
        return this.itemBreadcrums;
    };
    BreadcrumbService.prototype.getsearchMoviePage = function () {
        var url = _.toLower(_.trim(this.urlHistoryService.getUrlHistoryObj()));
        var item = new BreadcrumItem();
        if (_.includes(url, 'speech')) {
            item.label = "Speech Search Movie";
            item.link = "movie/speechSearchMovie";
        }
        else {
            item.label = "Search Movie";
            item.link = "movie/searchMovie";
        }
        return item;
    };
    BreadcrumbService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [url_history_store_service_1.UrlHistoryService])
    ], BreadcrumbService);
    return BreadcrumbService;
}());
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map