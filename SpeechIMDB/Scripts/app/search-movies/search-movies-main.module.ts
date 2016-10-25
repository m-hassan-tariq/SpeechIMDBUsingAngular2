import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RatingModule } from 'primeng/primeng';
import { NglModule } from 'ng-lightning/ng-lightning';

import { SearchMoviesRoutingModule } from './search-movies-main-routing.module';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SpeechSearchMovieComponent } from './search-movie-speech/search-movie-speech.component';
import { SearchMovieListComponent } from './search-movie-list/search-movie-list.component';
import { SearchMovieDetailComponent } from './search-movie-detail/search-movie-detail.component';;
import { SearchMovieMainComponent } from './search-movies-main.component';

import { MOVIE_PROVIDERS } from './search-movies-main.providers';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        NglModule.forRoot(),
        RatingModule,

        SearchMoviesRoutingModule,
    ],
    declarations: [
        SearchMovieMainComponent,
        SearchMovieComponent,
        SpeechSearchMovieComponent,
        SearchMovieListComponent,
        SearchMovieDetailComponent
    ],
    providers: [
        MOVIE_PROVIDERS
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SearchMoviesMainModule {
}