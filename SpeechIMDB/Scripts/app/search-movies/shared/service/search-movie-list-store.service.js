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
var movie_model_1 = require('../model/movie.model');
var SearchMovieListDataService = (function () {
    function SearchMovieListDataService() {
        this.movieListObj = new movie_model_1.MovieListModel();
    }
    SearchMovieListDataService.prototype.setMovieListObj = function (val) {
        this.movieListObj = val;
    };
    SearchMovieListDataService.prototype.getMovieListObj = function () {
        return this.movieListObj;
    };
    SearchMovieListDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SearchMovieListDataService);
    return SearchMovieListDataService;
}());
exports.SearchMovieListDataService = SearchMovieListDataService;
//# sourceMappingURL=search-movie-list-store.service.js.map