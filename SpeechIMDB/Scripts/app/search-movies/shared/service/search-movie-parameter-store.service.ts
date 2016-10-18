import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SearchMovieModel } from '../model/search-movie.model'

@Injectable()
export class SearchMovieParameterDataService {
    private searchParamObj: SearchMovieModel;

    constructor() {
        this.searchParamObj = new SearchMovieModel("", "", "");
    }

    public setSearchParamObj(val: SearchMovieModel): void {
        this.searchParamObj = val;
    }

    public getSearchParamObj(): SearchMovieModel{
        return this.searchParamObj;
    }
    
}