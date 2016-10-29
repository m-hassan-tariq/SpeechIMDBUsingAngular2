import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { SearchMovieModel } from '../model/search-movie.model'
import { MovieListModel } from '../model/movie.model'
import { WebApiObservableService } from '../../../shared/service/web-api-observable.service';
import { WebApiPromiseService } from '../../../shared/service/web-api-promise.service';
import { LoaderService } from '../../../shared/service/loader.service';
import { SearchMovieParameterDataService } from './search-movie-parameter-store.service';

@Injectable()
export class GetAllMoviesResolve implements Resolve<MovieListModel> {
    searchMovieModel: SearchMovieModel;

    constructor(
        private searchMovieParameterService: SearchMovieParameterDataService,
        private movieService: WebApiObservableService,
        private moviePromiseService: WebApiPromiseService,
        private loaderService: LoaderService) {
        this.searchMovieModel = new SearchMovieModel("", "", "", 1);
    }

    resolve(route: ActivatedRouteSnapshot): Promise<MovieListModel> | boolean {
        this.loaderService.displayLoader(true);
        this.searchMovieModel = this.searchMovieParameterService.getSearchParamObj();

        //making sure that movie-list-data-service has data to avoid server round trip for same search query otherwise make a server trip
        return this.moviePromiseService
            .getServiceWithComplexObjectAsQueryString('api/Movie/GetAllMovies', this.searchMovieModel)
            .then((result: MovieListModel) => {
                return result;
            })
            .catch(error => console.log(error));
    }
}