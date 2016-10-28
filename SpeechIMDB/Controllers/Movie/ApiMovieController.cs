using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using SpeechIMDB.DomainClasses;
using SpeechIMDB.BAL;
using AutoMapper;
using SpeechIMDB.Models;

namespace SpeechIMDB.Controllers.Movie
{
    public class MovieController : ApiBaseController
    {

        private readonly IMovieBAL _movieListService;

        public MovieController(IMovieBAL movieBAL)
        {
            _movieListService = movieBAL;
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetAllMovies([FromUri] SearchMovie modelSearchMovie)
        {
            var result = await _movieListService.GetAllMoviesAsync(modelSearchMovie);
            MovieListVM movieListVM = Mapper.Map<MovieList, MovieListVM>(result);
            return Ok(movieListVM);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetMovieDetail([FromUri] string imdbId)
        {
            var result = await _movieListService.GetMovieDetailAsync(imdbId);
            MovieDetailVM movieDetailVM = Mapper.Map<MovieDetail, MovieDetailVM>(result);
            return Ok(movieDetailVM);
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetMovieNews()
        {
            var result = await _movieListService.GetMovieNewsAsync();
            NewsListVM newsListVM = Mapper.Map<NewsList, NewsListVM>(result);
            return Ok(newsListVM);
        }

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////

        /// <summary>
        /// Testing APIs
        /// </summary>
        /// <returns></returns>

        [HttpGet]
        public string TestGetNo()
        {
            return "hassan rocks";
        }

        [HttpGet]
        public string TestGetParam(string query)
        {
            return "TestGetParam- " + query;
        }

        [HttpGet]
        public string TestGet([FromUri] SearchMovie modelSearchMovie)
        {
            return modelSearchMovie.Name + "-" + modelSearchMovie.Year + "-" + modelSearchMovie.Type;
        }

        [HttpPost]
        public string TestPost([FromBody] SearchMovie modelSearchMovie)
        {
            return modelSearchMovie.Name + "-" + modelSearchMovie.Year + "-" + modelSearchMovie.Type;
        }

        [HttpPut]
        public string TestPut([FromBody] SearchMovie modelSearchMovie)
        {
            return modelSearchMovie.Name + "-" + modelSearchMovie.Year + "-" + modelSearchMovie.Type;
        }

        [HttpPatch]
        public string TestPatch([FromBody] SearchMovie modelSearchMovie)
        {
            return modelSearchMovie.Name + "-" + modelSearchMovie.Year + "-" + modelSearchMovie.Type;
        }

        [HttpDelete]
        public string TestDelete([FromUri] SearchMovie modelSearchMovie)
        {
            return modelSearchMovie.Name + "-" + modelSearchMovie.Year + "-" + modelSearchMovie.Type;
        }

        [HttpDelete]
        public string TestDeleteWithId([FromUri] int id)
        {
            return "id: " + id;
        }
    }
}
