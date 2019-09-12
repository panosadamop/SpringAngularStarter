import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  	constructor(private http: HttpClient) { }
  
  	endpoint = 'http://localhost:8080';
	httpOptions = {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json'
	  })
	};
	
	private extractData(res: Response) {
	  console.log("extractData called");
	  let message = res;
	  
	  return message || { };
	}
	
	
	getGreeting(): Observable<any> {
	    console.log("greeting service called");
  		return this.http.get('http://localhost:8080/hello').pipe(map(this.extractData));
	}
}
