using System.Collections.Specialized;
using System.Threading.Tasks;

namespace SpeechIMDB.Service
{
    public interface IMovieServices<T> where T : class, new()
    {
        Task<T> GetMovieAsync(string queryString);

        Task<T> GetMovieNewsAsync(NameValueCollection queryString);
    }
}
