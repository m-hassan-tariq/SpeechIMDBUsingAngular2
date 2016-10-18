using SpeechIMDB.DomainClasses;
using SpeechIMDB.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpeechIMDB.BAL
{
    public class MovieBAL : IMovieBAL
    {
        private readonly IMovieServices<MovieList> _movieListService;
        private readonly IMovieServices<MovieDetail> _movieDetailService;

        public MovieBAL(IMovieServices<MovieList> movieListService, IMovieServices<MovieDetail> movieDetailService)
        {
            _movieListService = movieListService;
            _movieDetailService = movieDetailService;
        }

        public async Task<MovieList> GetAllMovies(SearchMovie obj)
        {
            return await _movieListService.GetMovieAsync("/?s=" + obj.Name + "&y=" + obj.Year + "&plot=full&r=json&type=" + obj.Type);
        }

        public async Task<MovieDetail> GetMovieDetail(string id)
        {
            return await _movieDetailService.GetMovieAsync("/?i=" + id + "&plot=full&r=json");
        }

    }
}
