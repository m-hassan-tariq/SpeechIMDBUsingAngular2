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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var search_movies_main_routing_module_1 = require('./search-movies-main-routing.module');
var search_movie_component_1 = require('./search-movie/search-movie.component');
var search_movie_list_component_1 = require('./search-movie-list/search-movie-list.component');
var search_movie_detail_component_1 = require('./search-movie-detail/search-movie-detail.component');
;
var search_movies_main_component_1 = require('./search-movies-main.component');
var get_all_movies_resolve_service_1 = require('./shared/service/get-all-movies.resolve.service');
var get_movie_detail_resolve_service_1 = require('./shared/service/get-movie-detail.resolve.service');
var search_movie_parameter_store_service_1 = require('./shared/service/search-movie-parameter-store.service');
var search_movie_list_store_service_1 = require('./shared/service/search-movie-list-store.service');
var SearchMoviesMainModule = (function () {
    function SearchMoviesMainModule() {
    }
    SearchMoviesMainModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                search_movies_main_routing_module_1.SearchMoviesRoutingModule,
                ng_bootstrap_1.NgbModule
            ],
            declarations: [
                search_movies_main_component_1.SearchMovieMainComponent,
                search_movie_component_1.SearchMovieComponent,
                search_movie_list_component_1.SearchMovieListComponent,
                search_movie_detail_component_1.SearchMovieDetailComponent
            ],
            providers: [
                get_all_movies_resolve_service_1.GetAllMoviesResolve,
                get_movie_detail_resolve_service_1.GetMovieDetailResolve,
                search_movie_parameter_store_service_1.SearchMovieParameterDataService,
                search_movie_list_store_service_1.SearchMovieListDataService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchMoviesMainModule);
    return SearchMoviesMainModule;
}());
exports.SearchMoviesMainModule = SearchMoviesMainModule;
//# sourceMappingURL=search-movies-main.module.js.map