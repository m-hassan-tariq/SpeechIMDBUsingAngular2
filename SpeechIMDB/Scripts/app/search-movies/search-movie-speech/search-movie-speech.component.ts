import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SearchMovieModel } from '../shared/model/search-movie.model';
import { MovieListModel } from '../shared/model/movie.model';
import { PageTitleService } from '../../shared/service/page-title.service';
import { ToasterService } from '../../shared/service/alert.service';
import { BreadcrumbService } from '../../shared/service/breadcrumb.service';
import { SpeechRecognitionService } from '../../shared/service/speech-recognition.service';
import { SearchMovieParameterDataService } from '../shared/service/search-movie-parameter-store.service';
import { UrlHistoryService } from '../shared/service/url-history-store.service';
import * as _ from "lodash";

@Component({
    selector: 'search-movie',
    templateUrl: '../../Scripts/app/search-movies/search-movie-speech/search-movie-speech.component.html'
})

export class SpeechSearchMovieComponent implements OnInit, OnDestroy {
    model: SearchMovieModel;
    showSearchButton: boolean;

    constructor(
        private searchMovieParameterService: SearchMovieParameterDataService,
        private pageTitleService: PageTitleService,
        private router: Router,
        private route: ActivatedRoute,
        private toasterService: ToasterService,
        private breadcrumbService: BreadcrumbService,
        private speechRecognitionService: SpeechRecognitionService,
        private urlHistoryService: UrlHistoryService) {
        this.model = new SearchMovieModel("", "", "", 1);
        this.showSearchButton = true;
    }

    ngOnInit() {
        //service to set title of page
        this.pageTitleService.setTitle("Speech Search Movies");
        this.toasterService.showToaster("info", "Speech Search Movie", "Are you ready to explore movie search using SpeechAPI?");
        this.breadcrumbService.setBreadcrumbs("speechSearchMovie");
        this.urlHistoryService.setUrlHistoryObj("/movie/speechSearchMovie");
    }

    ngOnDestroy() {
        this.speechRecognitionService.DestroySpeechObject();
    }

    activateSpeechSearchMovie(): void {
        this.showSearchButton = false;

        this.speechRecognitionService.record()
            .subscribe(
            //listener
            (value) => {
                this.filterTerm(value);
            },
            //errror
            (error) => {
                this.toasterService.showToaster("error", "Error: Speech Search", (<Error>error).message);
            },
             //completion
            () => {
                this.showSearchButton = true;
            });
    }

    filterTerm(term: string): void {
        if (_.toLower(term) == "clear")
            this.resetSearch();
        else if (_.toLower(term) == "search")
            this.searchMovie();
        else
            this.model.name = term;
    }

    resetSearch(): void {
        this.toasterService.showToaster("info", "Success", "Search field is ready to use again.");
        this.model = new SearchMovieModel("", "", "", 1);
    }

    searchMovie(): void {
        if (this.model.name) {
            this.searchMovieParameterService.setSearchParamObj(this.model);
            this.router.navigate(['/movie/searchMovieList']);
        }
        else
            this.toasterService.showToaster("error", "Required", "Please speak movie name");
    }

    get diagnostic(): string {
        return JSON.stringify(this.model);
    }
}