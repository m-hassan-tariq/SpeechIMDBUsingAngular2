import { GetAllMoviesResolve } from './shared/service/get-all-movies.resolve.service';
import { GetMovieDetailResolve } from './shared/service/get-movie-detail.resolve.service';
import { SearchMovieParameterDataService } from './shared/service/search-movie-parameter-store.service';
import { SearchMovieListDataService } from './shared/service/search-movie-list-store.service';

export const MOVIE_PROVIDERS = [
    GetAllMoviesResolve,
    GetMovieDetailResolve,
    SearchMovieParameterDataService,
    SearchMovieListDataService
]