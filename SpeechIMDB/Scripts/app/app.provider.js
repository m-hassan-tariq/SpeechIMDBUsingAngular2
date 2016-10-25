"use strict";
var page_title_service_1 = require('./shared/service/page-title.service');
var alert_service_1 = require('./shared/service/alert.service');
var breadcrumb_service_1 = require('./shared/service/breadcrumb.service');
var loader_service_1 = require('./shared/service/loader.service');
var speech_recognition_service_1 = require('./shared/service/speech-recognition.service');
var web_api_observable_service_1 = require('./shared/service/web-api-observable.service');
var web_api_promise_service_1 = require('./shared/service/web-api-promise.service');
exports.APP_PROVIDERS = [
    page_title_service_1.PageTitleService,
    alert_service_1.AlertService,
    alert_service_1.ToasterService,
    breadcrumb_service_1.BreadcrumbService,
    loader_service_1.LoaderService,
    speech_recognition_service_1.SpeechRecognitionService,
    web_api_observable_service_1.WebApiObservableService,
    web_api_promise_service_1.WebApiPromiseService
];
//# sourceMappingURL=app.provider.js.map