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


            bundles.Add(new ScriptBundle("~/CoreJS").Include(
                        "~/Content/assets/js/jquery-1.10.2.js",
                        "~/Content/assets/js/bootstrap.min.js",
                        "~/Content/assets/js/bootstrap-checkbox-radio.js"));

            bundles.Add(new ScriptBundle("~/DashboardJS").Include(
                         "~/Content/assets/js/chartist.min.js",
                         "~/Content/assets/js/bootstrap-notify.js",
                         "~/Content/assets/js/paper-dashboard.js"));

        }
    }
}
