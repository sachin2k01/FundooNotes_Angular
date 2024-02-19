import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import DataServiceService from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-fundo-header',
  templateUrl: './fundo-header.component.html',
  styleUrls: ['./fundo-header.component.scss']
})
export class FundoHeaderComponent implements OnInit, OnDestroy {

  drawerState!:boolean;
  subscription!:Subscription;
  constructor(private dataService:DataServiceService) { }
  
  ngOnInit(): void {
    this.subscription=this.dataService.currentdrawerStae.subscribe(state=>this.drawerState=state)
  }

  handleDrawerState()
  {
    this.dataService.toggleDrawerState(!this.drawerState);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }
}
