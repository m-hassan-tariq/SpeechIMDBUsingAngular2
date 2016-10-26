import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SearchMovieModel } from '../shared/model/search-movie.model';
import { MovieListModel } from '../shared/model/movie.model';
import { PageTitleService } from '../../shared/service/page-title.service';
import { ToasterService } from '../../shared/service/alert.service';
import { BreadcrumbService } from '../../shared/service/breadcrumb.service';
import { SpeechRecognitionService } from '../../shared/service/speech-recognition.service';
import { SearchMovieParameterDataService } from '../shared/service/search-movie-parameter-store.service';
import { SearchMovieListDataService } from '../shared/service/search-movie-list-store.service';
import * as _ from "lodash";

@Component({
    selector: 'search-movie',
    templateUrl: '../../Scripts/app/search-movies/search-movie-speech/search-movie-speech.component.html'
})

export class SpeechSearchMovieComponent implements OnInit, DoCheck {
    model: SearchMovieModel;
    oldModel: SearchMovieModel;
    changeDetected: boolean;
    popover: Object;

    val: string;

    constructor(
        private searchMovieParameterService: SearchMovieParameterDataService,
        private searchMovieListDataService: SearchMovieListDataService,
        private pageTitleService: PageTitleService,
        private router: Router,
        private route: ActivatedRoute,
        private toasterService: ToasterService,
        private breadcrumbService: BreadcrumbService,
        private speechRecognitionService: SpeechRecognitionService) {
        this.model = new SearchMovieModel("", "", "", 1);
        this.oldModel = new SearchMovieModel("", "", "", 1);
        this.popover = { message: "", theme: "", display: false, position: "" };
        this.changeDetected = false;
    }

    ngOnInit() {
        //populate fields in case of back button click from search movie list
        //use Object.assign() for deep copy, its similar to angular.copy()
        this.model = Object.assign({}, this.searchMovieParameterService.getSearchParamObj());
        this.oldModel = Object.assign({}, this.searchMovieParameterService.getSearchParamObj());

        //service to set title of page
        this.pageTitleService.setTitle("Speech Search Movies");
        this.toasterService.showToaster("info", "Speech Search Movie", "Are you ready to explore movie search using SpeechAPI?");
        this.breadcrumbService.setBreadcrumbs("speechSearchMovie");
        this.populatePopoverMessages("Click Here to enable Speech Search !!!", "info", true, "top");
    }

    activateSpeechSearchMovie(): void {
        this.populatePopoverMessages("Say something to search !!!", "success", true, "left");
        this.speechRecognitionService.record()
            .subscribe(e => {
                this.val = e;
                console.log(e);
            },
            error => {
                this.toasterService.showToaster("error", "Error: Speech Search", (<Error>error).message);
                console.error(error);
            },
            () => {
                console.log("Completed");
            });
    }

    populatePopoverMessages(msg: string, style: string, show: boolean, placement: string): void {
        this.popover = null;
        this.popover = { message: msg, theme: style, display: show, position: placement };
    }


    ////////////////////////////////////////

    ngDoCheck() {
        if (_.isEqual(this.model, this.oldModel) == false)
            this.changeDetected = true;
    }

    searchMovie(): void {
        if (this.changeDetected) {
            //set movies search parameter store
            this.searchMovieParameterService.setSearchParamObj(this.model);
            //reset movies list store
            this.searchMovieListDataService.setMovieListObj(new MovieListModel());
        }
        this.router.navigate(['movie/searchMovieList']);
    }

    get diagnostic(): string {
        return JSON.stringify(this.model);
    }
}