using SpeechIMDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace SpeechIMDB.Service
{
    public class MovieServices<T> : IMovieServices<T> where T : class, new()
    {
        static HttpClient client = new HttpClient();

        public MovieServices()
        {
            //client.BaseAddress = new Uri(AppConfig.OmdbUrl);
            //client.DefaultRequestHeaders.Accept.Clear();
            //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<T> GetMovieAsync(string queryString)
        {
            try
            {
                T movie = null;
                HttpResponseMessage response = await client.GetAsync(ServiceConfig.OmdbUrl + queryString);
                if (response.IsSuccessStatusCode)
                {
                    movie = await response.Content.ReadAsAsync<T>();
                }
                return movie;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return null;
            }
        }
    }
}
