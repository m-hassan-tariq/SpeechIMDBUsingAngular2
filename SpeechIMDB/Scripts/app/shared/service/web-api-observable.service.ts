import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { ToasterService } from './alert.service';
import { LoaderService } from './loader.service';

@Injectable()
export class WebApiObservableService {

    constructor(private http: Http,
        private toasterService: ToasterService,
        private loaderService: LoaderService) {
    }

    getService(url : string): Observable<any> {
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getServiceWithDynamicQueryTerm(url: string, key: string, val: string ): Observable<any> {
        return this.http
            .get(url + "/?"+ key + "=" + val)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getServiceWithFixedQueryString(url: string, param: any): Observable<any> {
        return this.http
            .get(url, { search: 'query=' + param })
            .map(this.extractData)
            .catch(this.handleError);
    }

    getServiceWithComplexObjectAsQueryString(url: string, param: any): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();

        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }

        return this.http
            .get(url, { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    }

    createService(url: string, param: any): Observable<any> {

        let body = JSON.stringify(param);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updateService(url: string, param: any): Observable<any> {

        let body = JSON.stringify(param);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    patchService(url: string, param: any): Observable<any> {

        let body = JSON.stringify(param);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .patch(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteService(url: string, param: any): Observable<any> {

        let params: URLSearchParams = new URLSearchParams();

        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, search: params });

        return this.http
            .delete(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteServiceWithId(url: string, key: string, val: string): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .delete(url + "/?" + key + "=" + val, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); 
        this.toasterService.showToaster('error', 'Oops!! An error occurred', errMsg);
        this.loaderService.displayLoader(false);
        return Observable.throw(errMsg);
    }
}