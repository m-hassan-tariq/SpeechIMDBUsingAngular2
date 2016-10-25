import { PageTitleService } from './shared/service/page-title.service';
import { AlertService, ToasterService } from './shared/service/alert.service';
import { BreadcrumbService } from './shared/service/breadcrumb.service';
import { LoaderService } from './shared/service/loader.service';
import { SpeechRecognitionService } from './shared/service/speech-recognition.service';
import { WebApiObservableService } from './shared/service/web-api-observable.service';
import { WebApiPromiseService } from './shared/service/web-api-promise.service';

export const APP_PROVIDERS = [
    PageTitleService,
    AlertService,
    ToasterService,
    BreadcrumbService,
    LoaderService,
    SpeechRecognitionService,
    WebApiObservableService,
    WebApiPromiseService
]