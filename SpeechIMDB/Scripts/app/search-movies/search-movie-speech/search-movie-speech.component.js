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
var alert_service_1 = require('../../shared/service/alert.service');
var breadcrumb_service_1 = require('../../shared/service/breadcrumb.service');
var speech_recognition_service_1 = require('../../shared/service/speech-recognition.service');
var search_movie_parameter_store_service_1 = require('../shared/service/search-movie-parameter-store.service');
var search_movie_list_store_service_1 = require('../shared/service/search-movie-list-store.service');
var url_history_store_service_1 = require('../shared/service/url-history-store.service');
var _ = require("lodash");
var SpeechSearchMovieComponent = (function () {
    function SpeechSearchMovieComponent(searchMovieParameterService, searchMovieListDataService, pageTitleService, router, route, toasterService, breadcrumbService, speechRecognitionService, urlHistoryService) {
        this.searchMovieParameterService = searchMovieParameterService;
        this.searchMovieListDataService = searchMovieListDataService;
        this.pageTitleService = pageTitleService;
        this.router = router;
        this.route = route;
        this.toasterService = toasterService;
        this.breadcrumbService = breadcrumbService;
        this.speechRecognitionService = speechRecognitionService;
        this.urlHistoryService = urlHistoryService;
        this.model = new search_movie_model_1.SearchMovieModel("", "", "", 1);
        this.showSearchButton = true;
    }
    SpeechSearchMovieComponent.prototype.ngOnInit = function () {
        //service to set title of page
        this.pageTitleService.setTitle("Speech Search Movies");
        this.toasterService.showToaster("info", "Speech Search Movie", "Are you ready to explore movie search using SpeechAPI?");
        this.breadcrumbService.setBreadcrumbs("speechSearchMovie");
        this.urlHistoryService.setUrlHistoryObj("/movie/speechSearchMovie");
    };
    SpeechSearchMovieComponent.prototype.activateSpeechSearchMovie = function () {
        var _this = this;
        this.showSearchButton = false;
        this.speechRecognitionService.record()
            .subscribe(
        //listener
        function (value) {
            _this.filterTerm(value);
        }, 
        //errror
        function (error) {
            _this.toasterService.showToaster("error", "Error: Speech Search", error.message);
        }, 
        //completion
        function () {
            _this.showSearchButton = true;
        });
    };
    SpeechSearchMovieComponent.prototype.filterTerm = function (term) {
        if (_.toLower(term) == "clear")
            this.resetSearch();
        else if (_.toLower(term) == "search")
            this.searchMovie();
        else
            this.model.name = term;
    };
    SpeechSearchMovieComponent.prototype.resetSearch = function () {
        this.toasterService.showToaster("info", "Success", "Search field is ready to use again.");
        this.model = new search_movie_model_1.SearchMovieModel("", "", "", 1);
    };
    SpeechSearchMovieComponent.prototype.searchMovie = function () {
        this.model.name = "silicon";
        if (this.model.name) {
            this.searchMovieParameterService.setSearchParamObj(this.model);
            this.searchMovieListDataService.setMovieListObj(new movie_model_1.MovieListModel());
            this.router.navigate(['/movie/searchMovieList']);
        }
        else
            this.toasterService.showToaster("error", "Required", "Please speak movie name");
    };
    Object.defineProperty(SpeechSearchMovieComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    SpeechSearchMovieComponent = __decorate([
        core_1.Component({
            selector: 'search-movie',
            templateUrl: '../../Scripts/app/search-movies/search-movie-speech/search-movie-speech.component.html'
        }), 
        __metadata('design:paramtypes', [search_movie_parameter_store_service_1.SearchMovieParameterDataService, search_movie_list_store_service_1.SearchMovieListDataService, page_title_service_1.PageTitleService, router_1.Router, router_1.ActivatedRoute, alert_service_1.ToasterService, breadcrumb_service_1.BreadcrumbService, speech_recognition_service_1.SpeechRecognitionService, url_history_store_service_1.UrlHistoryService])
    ], SpeechSearchMovieComponent);
    return SpeechSearchMovieComponent;
}());
exports.SpeechSearchMovieComponent = SpeechSearchMovieComponent;
//# sourceMappingURL=search-movie-speech.component.js.map