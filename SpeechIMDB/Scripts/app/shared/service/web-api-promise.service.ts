import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebApiPromiseService {


    constructor(private http: Http) { }

    getService(url: string): Promise<any> {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getServiceWithDynamicQueryTerm(url: string, key: string, val: string): Promise<any> {
        return this.http
            .get(url + "/?" + key + "=" + val)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getServiceWithFixedQueryString(url: string, param: any): Promise<any> {
        return this.http
            .get(url, { search: 'query=' + param })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getServiceWithComplexObjectAsQueryString(url: string, param: any): Promise<any> {
        let params: URLSearchParams = new URLSearchParams();

        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }

        return this.http
            .get(url, { search: params })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    createService(url: string, param: any): Promise<any> {

        let body = JSON.stringify(param);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(url, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    updateService(url: string, param: any): Promise<any> {

        let body = JSON.stringify(param);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(url, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    patchService(url: string, param: any): Promise<any> {

        let body = JSON.stringify(param);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .patch(url, body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    deleteService(url: string, param: any): Promise<any> {

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
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    deleteServiceWithId(url: string, key: string, val: string): Promise<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .delete(url + "/?" + key + "=" + val, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}