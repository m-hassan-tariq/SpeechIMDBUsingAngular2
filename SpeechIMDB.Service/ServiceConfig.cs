using System.Configuration;

namespace SpeechIMDB.Service
{
    public static class ServiceConfig
    {
        private static string _omdbUrl;
        private static string _newsSearchUrl;
        private static string _newsSearchKey;
        private static string _newsSearchLang;
        private static string _newsSearchRecordCount;
        private static string _newsSearchQuery;
        private static bool? _enableErrorLog;

        public static string OmdbUrl
        {
            get
            {
                if (string.IsNullOrEmpty(_omdbUrl))
                    _omdbUrl = ConfigurationManager.AppSettings["OmdbUrl"];
                return _omdbUrl;
            }
        }

        public static string NewsSearchUrl
        {
            get
            {
                if (string.IsNullOrEmpty(_newsSearchUrl))
                    _newsSearchUrl = ConfigurationManager.AppSettings["NewsSearchUrl"];
                return _newsSearchUrl;
            }
        }

        public static string NewsSearchKey
        {
            get
            {
                if (string.IsNullOrEmpty(_newsSearchKey))
                    _newsSearchKey = ConfigurationManager.AppSettings["NewsSearchKey"];
                return _newsSearchKey;
            }
        }

        public static string NewsSearchLang
        {
            get
            {
                if (string.IsNullOrEmpty(_newsSearchLang))
                    _newsSearchLang = ConfigurationManager.AppSettings["NewsSearchLang"];
                return _newsSearchLang;
            }
        }

        public static string NewsSearchRecordCount
        {
            get
            {
                if (string.IsNullOrEmpty(_newsSearchRecordCount))
                    _newsSearchRecordCount = ConfigurationManager.AppSettings["NewsSearchRecordCount"];
                return _newsSearchRecordCount;
            }
        }

        public static string NewsSearchQuery
        {
            get
            {
                if (string.IsNullOrEmpty(_newsSearchQuery))
                    _newsSearchQuery = ConfigurationManager.AppSettings["NewsSearchQuery"];
                return _newsSearchQuery;
            }
        }

        public static bool EnableErrorLog
        {
            get
            {
                if (!_enableErrorLog.HasValue)
                    _enableErrorLog = ConfigurationManager.AppSettings["EnableErrorLog"].ToLower() == "true";
                return _enableErrorLog.Value;
            }
        }
    }
}