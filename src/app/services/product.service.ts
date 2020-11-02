import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  // getData():Observable<any>{
  //   const url = "https://api.github.com/repos/hadley/dplyr/issues"
  //   return this.http.get<any>(url);
  // }
  
  getIssuesData():Observable<any>{
     const url =  "https://jsonplaceholder.typicode.com/posts"
    return this.http.get<any>(url);
  }
  
}
