using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpeechIMDB.Models
{
    public class SearchVM
    {
        public string title { set; get; }
        public string year { set; get; }
        public string imdbID { set; get; }
        public string type { set; get; }
        public string poster { set; get; }
    }

    public class MovieListVM
    {
        public SearchVM[] search { set; get; }
        public string totalResults { set; get; }
        public string response { set; get; }
    }
}