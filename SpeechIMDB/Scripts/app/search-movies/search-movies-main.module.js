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
var primeng_1 = require('primeng/primeng');
var ng_lightning_1 = require('ng-lightning/ng-lightning');
var search_movies_main_routing_module_1 = require('./search-movies-main-routing.module');
var search_movie_component_1 = require('./search-movie/search-movie.component');
var search_movie_speech_component_1 = require('./search-movie-speech/search-movie-speech.component');
var search_movie_list_component_1 = require('./search-movie-list/search-movie-list.component');
var search_movie_detail_component_1 = require('./search-movie-detail/search-movie-detail.component');
;
var search_movies_main_component_1 = require('./search-movies-main.component');
var search_movies_main_providers_1 = require('./search-movies-main.providers');
var SearchMoviesMainModule = (function () {
    function SearchMoviesMainModule() {
    }
    SearchMoviesMainModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_lightning_1.NglModule.forRoot(),
                primeng_1.RatingModule,
                search_movies_main_routing_module_1.SearchMoviesRoutingModule,
            ],
            declarations: [
                search_movies_main_component_1.SearchMovieMainComponent,
                search_movie_component_1.SearchMovieComponent,
                search_movie_speech_component_1.SpeechSearchMovieComponent,
                search_movie_list_component_1.SearchMovieListComponent,
                search_movie_detail_component_1.SearchMovieDetailComponent
            ],
            providers: [
                search_movies_main_providers_1.MOVIE_PROVIDERS
            ],
            schemas: [
                core_1.CUSTOM_ELEMENTS_SCHEMA
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchMoviesMainModule);
    return SearchMoviesMainModule;
}());
exports.SearchMoviesMainModule = SearchMoviesMainModule;
//# sourceMappingURL=search-movies-main.module.js.map