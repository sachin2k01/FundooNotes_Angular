import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Subscription } from 'rxjs';
import DataServiceService from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit,OnDestroy {
  drawerState!:boolean;
  subscription!:Subscription;

  constructor( private dataService:DataServiceService) { }
  
  ngOnInit(): void {
    this.subscription=this.dataService.currentdrawerStae.subscribe(state=>this.drawerState=state)
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

}
