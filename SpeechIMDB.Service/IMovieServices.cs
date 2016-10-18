using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpeechIMDB.Service
{
    public interface IMovieServices<T> where T : class, new()
    {
         Task<T> GetMovieAsync(string queryString);
    }
}
