using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpeechIMDB.DomainClasses
{
    public class SearchMovie
    {
        public string Name { set; get; }

        public string Year { set; get; }

        public string Type { set; get; }

        public int Page { set; get; }
    }
}