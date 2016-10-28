using SpeechIMDB.DomainClasses;
using SpeechIMDB.Service;
using System.Threading.Tasks;
using System.Web;

namespace SpeechIMDB.BAL
{
    public class MovieBAL : IMovieBAL
    {
        private readonly IMovieServices<MovieList> _movieListService;
        private readonly IMovieServices<MovieDetail> _movieDetailService;
        private readonly IMovieServices<NewsList> _newsListlService;

        public MovieBAL(IMovieServices<MovieList> movieListService, IMovieServices<MovieDetail> movieDetailService, IMovieServices<NewsList> newsListlService)
        {
            _movieListService = movieListService;
            _movieDetailService = movieDetailService;
            _newsListlService = newsListlService;
        }

        public async Task<MovieList> GetAllMoviesAsync(SearchMovie obj)
        {
            return await _movieListService.GetMovieAsync("/?s=" + obj.Name + "&y=" + obj.Year + "&plot=full&r=json&type=" + obj.Type + "&page=" + obj.Page);
        }

        public async Task<MovieDetail> GetMovieDetailAsync(string id)
        {
            return await _movieDetailService.GetMovieAsync("/?i=" + id + "&plot=full&r=json");
        }

        public async Task<NewsList> GetMovieNewsAsync()
        {
            var queryString = HttpUtility.ParseQueryString(string.Empty);
            queryString["q"] = ServiceConfig.NewsSearchQuery;
            queryString["count"] = ServiceConfig.NewsSearchRecordCount;
            queryString["offset"] = "0";
            queryString["mkt"] = ServiceConfig.NewsSearchLang;
            queryString["safeSearch"] = "Off";

            return await _newsListlService.GetMovieNewsAsync(queryString);
        }
    }
}
