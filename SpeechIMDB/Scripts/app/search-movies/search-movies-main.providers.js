"use strict";
var get_all_movies_resolve_service_1 = require('./shared/service/get-all-movies.resolve.service');
var get_movie_detail_resolve_service_1 = require('./shared/service/get-movie-detail.resolve.service');
var search_movie_parameter_store_service_1 = require('./shared/service/search-movie-parameter-store.service');
var search_movie_list_store_service_1 = require('./shared/service/search-movie-list-store.service');
var url_history_store_service_1 = require('./shared/service/url-history-store.service');
exports.MOVIE_PROVIDERS = [
    get_all_movies_resolve_service_1.GetAllMoviesResolve,
    get_movie_detail_resolve_service_1.GetMovieDetailResolve,
    search_movie_parameter_store_service_1.SearchMovieParameterDataService,
    search_movie_list_store_service_1.SearchMovieListDataService,
    url_history_store_service_1.UrlHistoryService
];
//# sourceMappingURL=search-movies-main.providers.js.map