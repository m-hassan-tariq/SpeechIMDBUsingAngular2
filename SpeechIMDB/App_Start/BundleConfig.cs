using System.Web;
using System.Web.Optimization;

namespace SpeechIMDB
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/CoreCSS").Include(
                      "~/Content/assets/css/bootstrap.min.css",
                      "~/Content/assets/css/animate.min.css",
                      "~/Content/assets/css/paper-dashboard.css",
                      "~/Content/assets/css/font-awesome.min.css",
                      "~/Content/assets/css/google-font.css",
                      "~/Content/assets/css/themify-icons.css"));

        }
    }
}
