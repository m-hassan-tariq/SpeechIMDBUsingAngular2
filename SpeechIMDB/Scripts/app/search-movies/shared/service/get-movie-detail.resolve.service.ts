import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MovieDetailModel } from '../model/movie-detail.model'
import { WebApiObservableService } from '../../../shared/service/web-api-observable.service';
import { WebApiPromiseService } from '../../../shared/service/web-api-promise.service';
import { LoaderService } from '../../../shared/service/loader.service';

@Injectable()
export class GetMovieDetailResolve implements Resolve<MovieDetailModel> {
    
    constructor(
        private router: Router,
        private movieService: WebApiObservableService,
        private moviePromiseService: WebApiPromiseService,
        private loaderService: LoaderService) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<MovieDetailModel> | boolean {
        this.loaderService.displayLoader(true);
        let id = route.params['imdbId'];

        return this.moviePromiseService
            .getServiceWithDynamicQueryTerm('api/Movie/GetMovieDetail', "imdbId", id)
            .then((result: MovieDetailModel) => {
                return result;
            })
            .catch(error => console.log(error));
    }
}