import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import DataServiceService from 'src/app/services/dataService/data-service.service';
import { MENU_ICON, SEARCH_ICON, REFRESH_ICON,SETTING_ICON,LIST_VIEW_ICON } from 'src/assets/svg-icons';

@Component({
  selector: 'app-fundo-header',
  templateUrl: './fundo-header.component.html',
  styleUrls: ['./fundo-header.component.scss']
})
export class FundoHeaderComponent implements OnInit, OnDestroy {

  drawerState!:boolean;
  subscription!:Subscription;
  constructor(private dataService:DataServiceService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIconLiteral("menu-icon", sanitizer.bypassSecurityTrustHtml(MENU_ICON))
    iconRegistry.addSvgIconLiteral("search-icon", sanitizer.bypassSecurityTrustHtml(SEARCH_ICON))
    iconRegistry.addSvgIconLiteral("refresh-icon", sanitizer.bypassSecurityTrustHtml(REFRESH_ICON))
    iconRegistry.addSvgIconLiteral("listView-icon", sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON))
    iconRegistry.addSvgIconLiteral("setting-icon", sanitizer.bypassSecurityTrustHtml(SETTING_ICON))
  }
  
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
