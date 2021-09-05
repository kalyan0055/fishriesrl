import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import URLS from './api';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private _http: HttpClient,) { }

  public getJSON(): Observable<any> {
    return this._http.get("../../assets/fishes.json").
    pipe(tap(),catchError(this.handleError('searchHeroes', [])));

}
  getFishes(id: number) {
       return this.commonApiResponse(URLS.GETFISHES,'get',null)
  }
  commonApiResponse(url: string, method: string, body: any): Observable<any> {
    console.log(`Http call - url: ${url}, body: ${JSON.stringify(body)}`);
     if (localStorage.getItem('currentUser')) {
      this.httpOptions.headers.append('token', localStorage.getItem('currentUser'));
    }
    switch (method) {
      // case 'post': return this._http.post(url, body, this.httpOptions).map((response: Response) => response.json());
      case 'get': return this._http.get(url, this.httpOptions)
      .pipe(tap(),catchError(this.handleError('searchHeroes', [])));
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
