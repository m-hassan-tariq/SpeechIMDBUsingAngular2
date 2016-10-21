import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchMovieMainComponent } from './search-movies-main.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SpeechSearchMovieComponent } from './search-movie-speech/search-movie-speech.component';
import { SearchMovieListComponent } from './search-movie-list/search-movie-list.component';
import { SearchMovieDetailComponent } from './search-movie-detail/search-movie-detail.component';
import { GetAllMoviesResolve } from './shared/service/get-all-movies.resolve.service';
import { GetMovieDetailResolve } from './shared/service/get-movie-detail.resolve.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'movie',
                component: SearchMovieMainComponent,
                children: [
                    {
                        path: 'searchMovie',
                        component: SearchMovieComponent
                    },
                    {
                        path: 'speechSearchMovie',
                        component: SpeechSearchMovieComponent
                    },
                    {
                        path: 'searchMovieList',
                        component: SearchMovieListComponent,
                        resolve: {
                            resolvedAllMovieList: GetAllMoviesResolve
                        }
                    },
                    {
                        path: 'searchMovieDetail/:imdbId',
                        component: SearchMovieDetailComponent,
                        resolve: {
                            resolvedMovieDetail: GetMovieDetailResolve
                        }
                    },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class SearchMoviesRoutingModule { }
