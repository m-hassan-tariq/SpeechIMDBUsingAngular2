using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpeechIMDB.DomainClasses
{
    public class Search
    {
        public string Title { set; get; }
        public string Year { set; get; }
        public string imdbID { set; get; }
        public string Type { set; get; }
        public string Poster { set; get; }
    }

    public class MovieList
    {
        public Search[] Search { set; get; }
        public string totalResults { set; get; }
        public string Response { set; get; }
    }
}