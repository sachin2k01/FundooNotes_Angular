import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl:string="https://localhost:7228/api/"

  constructor(private http:HttpClient) { }

  loginApiCall(endPoint:string,data:object):Observable<any>
  {
    return this.http.post(this.baseUrl+endPoint,data)
  }

  registerApiCall(endPoint:string,data:object):Observable<any>
  {
    return this.http.post(this.baseUrl+endPoint,data)
  }
}
