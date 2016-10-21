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
var search_movie_parameter_store_service_1 = require('../shared/service/search-movie-parameter-store.service');
var page_title_service_1 = require('../../shared/service/page-title.service');
var alert_service_1 = require('../../shared/service/alert.service');
var breadcrumb_service_1 = require('../../shared/service/breadcrumb.service');
var loader_service_1 = require('../../shared/service/loader.service');
var web_api_observable_service_1 = require('../../shared/service/web-api-observable.service');
var web_api_promise_service_1 = require('../../shared/service/web-api-promise.service');
var SearchMovieListComponent = (function () {
    function SearchMovieListComponent(router, route, searchMovieParameterService, pageTitleService, toasterService, breadcrumbService, loaderService, movieObservableService, moviePromiseService) {
        this.router = router;
        this.route = route;
        this.searchMovieParameterService = searchMovieParameterService;
        this.pageTitleService = pageTitleService;
        this.toasterService = toasterService;
        this.breadcrumbService = breadcrumbService;
        this.loaderService = loaderService;
        this.movieObservableService = movieObservableService;
        this.moviePromiseService = moviePromiseService;
        this.tableLoadingStatus = false;
        this.searchMovieModel = this.searchMovieParameterService.getSearchParamObj();
        this.msgs = [];
        this.sort = { key: 'title', order: 'asc' };
    }
    SearchMovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get data from resolve feature of routing
        this.route.data.forEach(function (data) {
            _this.movieListModel = data.resolvedAllMovieList;
            _this.toasterService.showToaster("info", "Search Movie List", "Page has been loaded");
            _this.toasterService.showToaster("success", "Search Result", _this.movieListModel.totalResults + ' record(s) found');
            _this.loaderService.displayLoader(false);
        });
        //service to set title of page
        this.pageTitleService.setTitle("Movie List");
        this.breadcrumbService.setBreadcrumbs("movieList");
    };
    SearchMovieListComponent.prototype.onSort = function ($event) {
        var key = $event.key, order = $event.order;
        this.movieListModel.search.sort(function (a, b) {
            return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
        });
    };
    SearchMovieListComponent.prototype.onRowClick = function ($event) {
        this.router.navigate(['movie/searchMovieDetail', $event.data.imdbID]);
    };
    SearchMovieListComponent.prototype.refreshDataOnPageChange = function (pageNumber) {
        var _this = this;
        this.tableLoadingStatus = true;
        this.searchMovieModel.page = pageNumber;
        this.movieObservableService
            .getServiceWithComplexObjectAsQueryString('api/Movie/GetAllMovies', this.searchMovieModel)
            .subscribe(function (result) {
            _this.tableLoadingStatus = false;
            _this.movieListModel = result;
        }, function (error) {
            _this.toasterService.showToaster("error", "Opps!! Error Occured", error);
            _this.tableLoadingStatus = false;
        });
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
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, search_movie_parameter_store_service_1.SearchMovieParameterDataService, page_title_service_1.PageTitleService, alert_service_1.ToasterService, breadcrumb_service_1.BreadcrumbService, loader_service_1.LoaderService, web_api_observable_service_1.WebApiObservableService, web_api_promise_service_1.WebApiPromiseService])
    ], SearchMovieListComponent);
    return SearchMovieListComponent;
}());
exports.SearchMovieListComponent = SearchMovieListComponent;
//# sourceMappingURL=search-movie-list.component.js.map