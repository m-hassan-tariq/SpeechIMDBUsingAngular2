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
var web_api_observable_service_1 = require('../../../shared/service/web-api-observable.service');
var web_api_promise_service_1 = require('../../../shared/service/web-api-promise.service');
var loader_service_1 = require('../../../shared/service/loader.service');
var GetMovieDetailResolve = (function () {
    function GetMovieDetailResolve(router, movieService, moviePromiseService, loaderService) {
        this.router = router;
        this.movieService = movieService;
        this.moviePromiseService = moviePromiseService;
        this.loaderService = loaderService;
    }
    GetMovieDetailResolve.prototype.resolve = function (route) {
        this.loaderService.displayLoader(true);
        var id = route.params['imdbId'];
        return this.moviePromiseService
            .getServiceWithDynamicQueryTerm('api/Movie/GetMovieDetail', "imdbId", id)
            .then(function (result) {
            return result;
        })
            .catch(function (error) { return console.log(error); });
    };
    GetMovieDetailResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, web_api_observable_service_1.WebApiObservableService, web_api_promise_service_1.WebApiPromiseService, loader_service_1.LoaderService])
    ], GetMovieDetailResolve);
    return GetMovieDetailResolve;
}());
exports.GetMovieDetailResolve = GetMovieDetailResolve;
//# sourceMappingURL=get-movie-detail.resolve.service.js.map