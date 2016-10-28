using System.Configuration;

namespace SpeechIMDB.Service
{
    public static class ServiceConfig
    {
        private static string _omdbUrl;
        private static string _newsSearchUrl;
        private static string _newsSearchKey;
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