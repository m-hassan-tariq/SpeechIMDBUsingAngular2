using SpeechIMDB.DomainClasses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpeechIMDB.BAL
{
    public interface IMovieBAL
    {
        Task<MovieList> GetAllMovies(SearchMovie obj);

        Task<MovieDetail> GetMovieDetail(string id);
    }
}
