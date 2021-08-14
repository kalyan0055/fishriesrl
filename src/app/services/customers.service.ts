import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError,retry,map,tap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // url = ''
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers(body:any){
    // this.http.get(this.url,this.httpOptions).pipe((data)=> data.json());
    return this.http.get(this.url,this.httpOptions).pipe(
      map((users)=>users));
        //  this.log(`found heroes matching "${term}"`) :
        //  this.log(`no heroes matching "${term}"`)),
     
    // );
  }


}
