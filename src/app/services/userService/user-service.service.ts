import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }

  userLogin(data:object){
    return this.httpService.loginApiCall("User/login",data);
  }

  userRegister(data:object)
  {
    return this.httpService.registerApiCall("User/register",data)

  }
}
