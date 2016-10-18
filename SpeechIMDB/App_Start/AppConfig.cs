using System.Configuration;

namespace SpeechIMDB
{
    public static class AppConfig
    {
        private static string _omdbUrl;
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