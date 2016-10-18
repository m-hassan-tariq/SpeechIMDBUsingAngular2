using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpeechIMDB.Models
{
    public class MovieDetailVM
    {
        public string title { get; set; }
        public string year { get; set; }
        public string rated { get; set; }
        public string released { get; set; }
        public string runtime { get; set; }
        public string genre { get; set; }
        public string director { get; set; }
        public string writer { get; set; }
        public string actors { get; set; }
        public string plot { get; set; }
        public string language { get; set; }
        public string country { get; set; }
        public string awards { get; set; }
        public string poster { get; set; }
        public string metascore { get; set; }
        public string imdbRating { get; set; }
        public string imdbVotes { get; set; }
        public string imdbID { get; set; }
        public string type { get; set; }
        public string response { get; set; }
    }
}