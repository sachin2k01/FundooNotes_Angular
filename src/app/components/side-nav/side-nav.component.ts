import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import DataServiceService from 'src/app/services/dataService/data-service.service';
import { ARCHIVE_ICON, COLLABRATOR_ICON, EDIT_ICON, NOTE_ICON, REMINDER_ICON, TRASH_ICON } from 'src/assets/svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit,OnDestroy {
  drawerState:boolean=true;
  subscription!:Subscription;

  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private dataService:DataServiceService) 
  {
    iconRegistry.addSvgIconLiteral("colloborator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("archive-icon", sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral("trash-icon", sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
    iconRegistry.addSvgIconLiteral("remainder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))

   }
  
  ngOnInit(): void {
    this.subscription=this.dataService.currentdrawerState.subscribe(state=>this.drawerState=state)
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

}
