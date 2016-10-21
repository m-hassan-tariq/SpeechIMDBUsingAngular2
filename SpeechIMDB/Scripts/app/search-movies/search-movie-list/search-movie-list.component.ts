import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Message } from 'primeng/primeng';

import { MovieListModel } from '../shared/model/movie.model';
import { PageTitleService } from '../../shared/service/page-title.service';
import { ToasterService } from '../../shared/service/alert.service';
import { BreadcrumbService } from '../../shared/service/breadcrumb.service';
import { WebApiObservableService } from '../../shared/service/web-api-observable.service';
import { WebApiPromiseService } from '../../shared/service/web-api-promise.service';

@Component({
    selector: 'search-movie-list',
    templateUrl: '../../Scripts/app/search-movies/search-movie-list/search-movie-list.component.html'
})

export class SearchMovieListComponent implements OnInit {
    movieListModel: MovieListModel;
    errorMessage: string;
    msgs: Message[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private pageTitleService: PageTitleService,
        private toasterService: ToasterService,
        private breadcrumbService: BreadcrumbService,
        private movieService: WebApiObservableService,
        private moviePromiseService: WebApiPromiseService) {
    }

    ngOnInit() {
        //get data from resolve feature of routing
        this.route.data.forEach((data: { resolvedAllMovieList: MovieListModel }) => {
            this.movieListModel = data.resolvedAllMovieList;
            this.toasterService.showToaster("info", "Search Result", this.movieListModel.totalResults + ' record(s) found');
        });

        //service to set title of page
        this.pageTitleService.setTitle("Movie List");
        this.breadcrumbService.setBreadcrumbs("movieList");
    }

    gotoMovieDetail(id: string): void {
        this.router.navigate(['movie/searchMovieDetail', id]);
    }

    get diagnostic() : string {
        return JSON.stringify(this.movieListModel);
    }

    /////////////////////////////////////////////////////////////////////////

    //observableApi() {
    //    console.log("-----------------observableApi--------------------");
    //    this.movieService
    //        .getService('api/Movie/TestGetNo')
    //        .subscribe(
    //            result => console.log("1. getService: " + result),
    //            error => this.errorMessage = <any>error
    //        );

    //    this.movieService
    //        .getServiceWithDynamicQueryTerm('api/Movie/TestGetParam', "query", "hello")
    //        .subscribe(
    //            result => console.log("2. getServiceWithDynamicQueryTerm: " + result),
    //            error => this.errorMessage = <any>error
    //        );

    //    this.movieService
    //        .getServiceWithFixedQueryString('api/Movie/TestGetParam', this.searchMovieModel.name)
    //        .subscribe(
    //            result => console.log("3. getServiceWithFixedQueryString: " + result),
    //            error => this.errorMessage = <any>error
    //        );

    //    this.movieService
    //        .getServiceWithComplexObjectAsQueryString('api/Movie/TestGet', this.searchMovieModel)
    //        .subscribe(
    //            result => console.log("4. getServiceWithComplexObjectAsQueryString: " + result),
    //            error => this.errorMessage = <any>error
    //        );

    //    this.movieService
    //        .createService('api/Movie/TestPost', this.searchMovieModel)
    //        .subscribe(
    //            result => console.log("5. createService: " + result),
    //            error => this.errorMessage = <any>error
    //        );

    //    this.movieService
    //        .updateService('api/Movie/TestPut', this.searchMovieModel)
    //        .subscribe(
    //            result => console.log("6. updateService: " + result),
    //            error => this.errorMessage = <any>error
    //        );

    //    this.movieService
    //        .patchService('api/Movie/TestPatch', this.searchMovieModel)
    //        .subscribe(
    //            result => console.log("7. patchService: " + result),
    //            error => this.errorMessage = <any>error
    //        );

    //    this.movieService
    //        .deleteService('api/Movie/TestDelete', this.searchMovieModel)
    //        .subscribe(
    //            result => console.log("8. deleteService: " + result),
    //            error => this.errorMessage = <any>error
    //        );

    //    this.movieService
    //        .deleteServiceWithId('api/Movie/TestDeleteWithId', "id", "8631")
    //        .subscribe(
    //            result => console.log("9. deleteServiceWithId: " + result),
    //            error => this.errorMessage = <any>error
    //        );
    //}

    //promiseApi() {
    //    console.log("-----------------promiseApi--------------------");
    //    this.moviePromiseService
    //        .getService('api/Movie/TestGetNo')
    //        .then(result => console.log("1. getService: " + result))
    //        .catch(error => console.log(error));

    //    this.moviePromiseService
    //        .getServiceWithDynamicQueryTerm('api/Movie/TestGetParam', "query","hello")
    //        .then(result => console.log("2. getServiceWithDynamicQueryTerm: " + result))
    //        .catch(error => console.log(error));

    //    this.moviePromiseService
    //        .getServiceWithFixedQueryString('api/Movie/TestGetParam', this.searchMovieModel.name)
    //        .then(result => console.log("3. getServiceWithFixedQueryString: " + result))
    //        .catch(error => console.log(error));

    //    this.moviePromiseService
    //        .getServiceWithComplexObjectAsQueryString('api/Movie/TestGet', this.searchMovieModel)
    //        .then(result => console.log("4. getServiceWithComplexObjectAsQueryString: " + result))
    //        .catch(error => console.log(error));

    //    this.moviePromiseService
    //        .createService('api/Movie/TestPost', this.searchMovieModel)
    //        .then(result => console.log("5. createService: " + result))
    //        .catch(error => console.log(error));

    //    this.moviePromiseService
    //        .updateService('api/Movie/TestPut', this.searchMovieModel)
    //        .then(result => console.log("6. updateService: " + result))
    //        .catch(error => console.log(error));

    //    this.moviePromiseService
    //        .patchService('api/Movie/TestPatch', this.searchMovieModel)
    //        .then(result => console.log("7. patchService: " + result))
    //        .catch(error => console.log(error));

    //    this.moviePromiseService
    //        .deleteService('api/Movie/TestDelete', this.searchMovieModel)
    //        .then(result => console.log("8. deleteService: " + result))
    //        .catch(error => console.log(error));

    //    this.moviePromiseService
    //        .deleteServiceWithId('api/Movie/TestDeleteWithId', "id", "8631")
    //        .then(result => console.log("9. deleteServiceWithId: " + result))
    //        .catch(error => console.log(error));
    //}
}