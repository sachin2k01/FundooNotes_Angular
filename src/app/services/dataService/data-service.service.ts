import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class DataServiceService {
  private drawerState=new BehaviorSubject(false);
  private searchText=new BehaviorSubject("");
  currentdrawerState=this.drawerState.asObservable();
  currentSearchText=this.searchText.asObservable();

  constructor() { }

  toggleDrawerState(state:boolean)
  {
    this.drawerState.next(state);
  }

  updateSearchText(state:string)
  {
    this.searchText.next(state);
  }
}
