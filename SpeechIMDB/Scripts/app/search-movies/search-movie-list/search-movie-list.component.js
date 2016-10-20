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
var router_1 = require('@angular/router');
var page_title_service_1 = require('../../shared/service/page-title.service');
var alert_service_1 = require('../../shared/service/alert.service');
var web_api_observable_service_1 = require('../../shared/service/web-api-observable.service');
var web_api_promise_service_1 = require('../../shared/service/web-api-promise.service');
var SearchMovieListComponent = (function () {
    function SearchMovieListComponent(router, route, pageTitleService, toasterService, movieService, moviePromiseService) {
        this.router = router;
        this.route = route;
        this.pageTitleService = pageTitleService;
        this.toasterService = toasterService;
        this.movieService = movieService;
        this.moviePromiseService = moviePromiseService;
        this.msgs = [];
    }
    SearchMovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get data from resolve feature of routing
        this.route.data.forEach(function (data) {
            _this.movieListModel = data.resolvedAllMovieList;
            _this.toasterService.showToaster("info", "Search Result", _this.movieListModel.totalResults + ' record(s) found');
        });
        //service to set title of page
        this.pageTitleService.setTitle("Movie List");
    };
    SearchMovieListComponent.prototype.gotoMovieDetail = function (id) {
        this.router.navigate(['movie/searchMovieDetail', id]);
    };
    Object.defineProperty(SearchMovieListComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.movieListModel);
        },
        enumerable: true,
        configurable: true
    });
    SearchMovieListComponent = __decorate([
        core_1.Component({
            selector: 'search-movie-list',
            templateUrl: '../../Scripts/app/search-movies/search-movie-list/search-movie-list.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, page_title_service_1.PageTitleService, alert_service_1.ToasterService, web_api_observable_service_1.WebApiObservableService, web_api_promise_service_1.WebApiPromiseService])
    ], SearchMovieListComponent);
    return SearchMovieListComponent;
}());
exports.SearchMovieListComponent = SearchMovieListComponent;
//# sourceMappingURL=search-movie-list.component.js.map