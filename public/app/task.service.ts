import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import { catchError, map } from 'rxjs/operators';
@Injectable()
export class TaskService {

    constructor(private http: HttpClient) {}
    TaskPost(value){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods':'POST'
            })
        };

        let url     = 'http://192.168.56.254/laravel-master/public/index.php/api/taskpost';
        return this.http.post(url, {name:value},httpOptions);

    }




}
