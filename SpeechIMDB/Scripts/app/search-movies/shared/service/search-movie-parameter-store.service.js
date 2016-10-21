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
var SearchMovieParameterDataService = (function () {
    function SearchMovieParameterDataService() {
        this.searchParamObj = new search_movie_model_1.SearchMovieModel("", "", "", 1);
    }
    SearchMovieParameterDataService.prototype.setSearchParamObj = function (val) {
        this.searchParamObj = val;
    };
    SearchMovieParameterDataService.prototype.getSearchParamObj = function () {
        return this.searchParamObj;
    };
    SearchMovieParameterDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SearchMovieParameterDataService);
    return SearchMovieParameterDataService;
}());
exports.SearchMovieParameterDataService = SearchMovieParameterDataService;
//# sourceMappingURL=search-movie-parameter-store.service.js.map