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
var search_movie_model_1 = require('../model/search-movie.model');
var web_api_observable_service_1 = require('../../../shared/service/web-api-observable.service');
var web_api_promise_service_1 = require('../../../shared/service/web-api-promise.service');
var loader_service_1 = require('../../../shared/service/loader.service');
var search_movie_parameter_store_service_1 = require('./search-movie-parameter-store.service');
var search_movie_list_store_service_1 = require('./search-movie-list-store.service');
var GetAllMoviesResolve = (function () {
    function GetAllMoviesResolve(searchMovieParameterService, searchMovieListDataService, movieService, moviePromiseService, loaderService) {
        this.searchMovieParameterService = searchMovieParameterService;
        this.searchMovieListDataService = searchMovieListDataService;
        this.movieService = movieService;
        this.moviePromiseService = moviePromiseService;
        this.loaderService = loaderService;
        this.searchMovieModel = new search_movie_model_1.SearchMovieModel("", "", "", 1);
    }
    GetAllMoviesResolve.prototype.resolve = function (route) {
        var _this = this;
        this.loaderService.displayLoader(true);
        this.searchMovieModel = this.searchMovieParameterService.getSearchParamObj();
        var lstMovie = this.searchMovieListDataService.getMovieListObj();
        //making sure that movie-list-data-service has data to avoid server round trip for same search query otherwise make a server trip
        if (lstMovie.response) {
            return Promise.resolve(lstMovie);
        }
        else {
            return this.moviePromiseService
                .getServiceWithComplexObjectAsQueryString('api/Movie/GetAllMovies', this.searchMovieModel)
                .then(function (result) {
                _this.searchMovieListDataService.setMovieListObj(result);
                return result;
            })
                .catch(function (error) { return console.log(error); });
        }
    };
    GetAllMoviesResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [search_movie_parameter_store_service_1.SearchMovieParameterDataService, search_movie_list_store_service_1.SearchMovieListDataService, web_api_observable_service_1.WebApiObservableService, web_api_promise_service_1.WebApiPromiseService, loader_service_1.LoaderService])
    ], GetAllMoviesResolve);
    return GetAllMoviesResolve;
}());
exports.GetAllMoviesResolve = GetAllMoviesResolve;
//# sourceMappingURL=get-all-movies.resolve.service.js.map