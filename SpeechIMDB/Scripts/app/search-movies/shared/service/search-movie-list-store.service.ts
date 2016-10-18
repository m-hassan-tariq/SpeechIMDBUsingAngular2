import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MovieListModel } from '../model/movie.model'

@Injectable()
export class SearchMovieListDataService {
    private movieListObj: MovieListModel;

    constructor() {
        this.movieListObj = new MovieListModel();
    }

    public setMovieListObj(val: MovieListModel): void {
        this.movieListObj = val;
    }

    public getMovieListObj(): MovieListModel {
        return this.movieListObj;
    }

}