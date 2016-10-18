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
var search_movie_model_1 = require('../shared/model/search-movie.model');
var movie_model_1 = require('../shared/model/movie.model');
var page_title_service_1 = require('../../shared/service/page-title.service');
var search_movie_parameter_store_service_1 = require('../shared/service/search-movie-parameter-store.service');
var search_movie_list_store_service_1 = require('../shared/service/search-movie-list-store.service');
var _ = require("lodash");
var SearchMovieComponent = (function () {
    function SearchMovieComponent(searchMovieParameterService, searchMovieListDataService, pageTitleService, router, route) {
        this.searchMovieParameterService = searchMovieParameterService;
        this.searchMovieListDataService = searchMovieListDataService;
        this.pageTitleService = pageTitleService;
        this.router = router;
        this.route = route;
        this.model = new search_movie_model_1.SearchMovieModel("", "", "");
        this.oldModel = new search_movie_model_1.SearchMovieModel("", "", "");
        this.changeDetected = false;
    }
    SearchMovieComponent.prototype.ngOnInit = function () {
        //populate fields in case of back button click from search movie list
        //use Object.assign() for deep copy, its similar to angular.copy()
        this.model = Object.assign({}, this.searchMovieParameterService.getSearchParamObj());
        this.oldModel = Object.assign({}, this.searchMovieParameterService.getSearchParamObj());
        //service to set title of page
        this.pageTitleService.setTitle("Search Movies");
    };
    SearchMovieComponent.prototype.ngDoCheck = function () {
        if (_.isEqual(this.model, this.oldModel) == false)
            this.changeDetected = true;
    };
    SearchMovieComponent.prototype.searchMovie = function () {
        if (this.changeDetected) {
            //set movies search parameter store
            this.searchMovieParameterService.setSearchParamObj(this.model);
            //reset movies list store
            this.searchMovieListDataService.setMovieListObj(new movie_model_1.MovieListModel());
        }
        this.router.navigate(['movie/searchMovieList']);
    };
    Object.defineProperty(SearchMovieComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    SearchMovieComponent = __decorate([
        core_1.Component({
            selector: 'search-movie',
            templateUrl: '../../Scripts/app/search-movies/search-movie/search-movie.component.html'
        }), 
        __metadata('design:paramtypes', [search_movie_parameter_store_service_1.SearchMovieParameterDataService, search_movie_list_store_service_1.SearchMovieListDataService, page_title_service_1.PageTitleService, router_1.Router, router_1.ActivatedRoute])
    ], SearchMovieComponent);
    return SearchMovieComponent;
}());
exports.SearchMovieComponent = SearchMovieComponent;
//# sourceMappingURL=search-movie.component.js.map