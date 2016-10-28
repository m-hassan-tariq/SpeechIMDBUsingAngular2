using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpeechIMDB.Models
{
    public class NewsVM
    {
        public string name { get; set; }
        public string url { get; set; }
        public string thumbnailUrl { get; set; }
        public string description { get; set; }
        public string sourceName { get; set; }
        public string datePublished { get; set; }
        public string category { get; set; }
    }

    public class NewsListVM
    {
        public List<NewsVM> news { get; set; }
    }
}