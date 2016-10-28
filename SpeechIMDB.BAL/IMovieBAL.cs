using SpeechIMDB.DomainClasses;
using System.Threading.Tasks;

namespace SpeechIMDB.BAL
{
    public interface IMovieBAL
    {
        Task<MovieList> GetAllMoviesAsync(SearchMovie obj);

        Task<MovieDetail> GetMovieDetailAsync(string id);

        Task<NewsList> GetMovieNewsAsync();
    }
}
