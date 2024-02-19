import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class DataServiceService {
  private drawerState=new BehaviorSubject(false);
  currentdrawerStae=this.drawerState.asObservable();

  constructor() { }

  toggleDrawerState(state:boolean)
  {
    this.drawerState.next(state);
  }
}
