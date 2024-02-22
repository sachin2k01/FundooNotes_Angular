import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  public header=new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem("AuthToken")}`
  })

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

  getAllNotesApiCall(endPoint:string):Observable<any>
  {
    
    return this.http.get(this.baseUrl+endPoint,{
      headers:this.header
    })
  }

  createNoteApiCall(endPoint:string,data:object)
  {
    return this.http.post(this.baseUrl+endPoint,data,{headers:this.header})
  }
}
