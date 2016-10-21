import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MovieDetailModel } from '../shared/model/movie-detail.model'
import { PageTitleService } from '../../shared/service/page-title.service';
import { AlertService, AlertMessage, ToasterService } from '../../shared/service/alert.service';
import { BreadcrumbService } from '../../shared/service/breadcrumb.service';
import { LoaderService } from '../../shared/service/loader.service';
import { WebApiObservableService } from '../../shared/service/web-api-observable.service';
import { WebApiPromiseService } from '../../shared/service/web-api-promise.service';

@Component({
    selector: 'search-movie-detail',
    templateUrl: '../../Scripts/app/search-movies/search-movie-detail/search-movie-detail.component.html'
})

export class SearchMovieDetailComponent implements OnInit {
    movieDetailModel: MovieDetailModel;

    constructor(private route: ActivatedRoute,
        private pageTitleService: PageTitleService,
        private movieService: WebApiObservableService,
        private moviePromiseService: WebApiPromiseService,
        private alertService: AlertService,
        private breadcrumbService: BreadcrumbService,
        private loaderService: LoaderService) {
        
    }

    ngOnInit() {
        //get data from resolve feature of routing
        this.route.data.forEach((data: { resolvedMovieDetail: MovieDetailModel }) => {
            this.movieDetailModel = data.resolvedMovieDetail;
            this.loaderService.displayLoader(false);
            if (this.movieDetailModel.title)
                this.alertService.showAlert(true, "Details of " + this.movieDetailModel.title + " has been laoded.");
        });

        //recieving parametes from url for testing
        this.route.params.forEach((params: Params) => {
            //console.log(params['imdbId'])
        });

        this.pageTitleService.setTitle("Movie Detail");
        this.breadcrumbService.setBreadcrumbs("movieDetail");
    }

    get diagnostic() : string {
        return JSON.stringify(this.movieDetailModel);
    }
}