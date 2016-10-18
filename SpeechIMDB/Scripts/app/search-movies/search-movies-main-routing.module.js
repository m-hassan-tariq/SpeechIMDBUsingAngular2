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
var search_movies_main_component_1 = require('./search-movies-main.component');
var search_movie_component_1 = require('./search-movie/search-movie.component');
var search_movie_list_component_1 = require('./search-movie-list/search-movie-list.component');
var search_movie_detail_component_1 = require('./search-movie-detail/search-movie-detail.component');
var get_all_movies_resolve_service_1 = require('./shared/service/get-all-movies.resolve.service');
var get_movie_detail_resolve_service_1 = require('./shared/service/get-movie-detail.resolve.service');
var SearchMoviesRoutingModule = (function () {
    function SearchMoviesRoutingModule() {
    }
    SearchMoviesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: 'movie',
                        component: search_movies_main_component_1.SearchMovieMainComponent,
                        children: [
                            {
                                path: 'searchMovie',
                                component: search_movie_component_1.SearchMovieComponent
                            },
                            {
                                path: 'searchMovieList',
                                component: search_movie_list_component_1.SearchMovieListComponent,
                                resolve: {
                                    resolvedAllMovieList: get_all_movies_resolve_service_1.GetAllMoviesResolve
                                }
                            },
                            {
                                path: 'searchMovieDetail/:imdbId',
                                component: search_movie_detail_component_1.SearchMovieDetailComponent,
                                resolve: {
                                    resolvedMovieDetail: get_movie_detail_resolve_service_1.GetMovieDetailResolve
                                }
                            },
                        ]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchMoviesRoutingModule);
    return SearchMoviesRoutingModule;
}());
exports.SearchMoviesRoutingModule = SearchMoviesRoutingModule;
//# sourceMappingURL=search-movies-main-routing.module.js.map