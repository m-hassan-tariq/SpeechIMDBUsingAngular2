import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchMoviesRoutingModule } from './search-movies-main-routing.module';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SearchMovieListComponent } from './search-movie-list/search-movie-list.component';
import { SearchMovieDetailComponent } from './search-movie-detail/search-movie-detail.component';;
import { SearchMovieMainComponent } from './search-movies-main.component';
import { GetAllMoviesResolve } from './shared/service/get-all-movies.resolve.service';
import { GetMovieDetailResolve } from './shared/service/get-movie-detail.resolve.service';
import { SearchMovieParameterDataService } from './shared/service/search-movie-parameter-store.service';
import { SearchMovieListDataService } from './shared/service/search-movie-list-store.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchMoviesRoutingModule,
        NgbModule
    ],
    declarations: [
        SearchMovieMainComponent,
        SearchMovieComponent,
        SearchMovieListComponent,
        SearchMovieDetailComponent
    ],
    providers: [
        GetAllMoviesResolve,
        GetMovieDetailResolve,
        SearchMovieParameterDataService,
        SearchMovieListDataService
    ]
})
export class SearchMoviesMainModule {
}