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


  archiveNoteApiCall(endPoint:string,noteId:number)
  {
    return this.http.put(this.baseUrl+endPoint+'?noteId='+noteId,"",{headers:this.header})
  }


  trashNoteApiCall(endPoint:string,noteId:number)
  {
    return this.http.put(this.baseUrl+endPoint+'?noteId='+noteId,"",{headers:this.header})
  }

  changeNoteColorApiCall(endPoint:string,noteId:number,color:string)
  {
    const encodedColor = encodeURIComponent(color);
    return this.http.put(this.baseUrl+endPoint+'?noteId='+noteId+'&color='+encodedColor,"",{headers:this.header})
  }


  deleteNoteApiCall(endPoint:string,noteId:number)
  {
    return this.http.delete(this.baseUrl+endPoint+'?noteId='+noteId,{headers:this.header})
  }

  updateNoteApiCall(endPoint:string,data:{noteId:number,title:string,description:string}):Observable<any>
  {
    console.log(data.noteId)
    return this.http.put(this.baseUrl+endPoint+'?noteId='+data.noteId,data,{headers:this.header})
  }
  
}
