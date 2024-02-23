import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
import { REMINDER_ICON, EDIT_ICON, ARCHIVE_ICON, COLOR_PALATTE_ICON,COLLABRATOR_ICON,MORE_ICON, UNARCHIVE_ICON, DELETE_FOREVER_ICON, RESTORE_ICON } from 'src/assets/svg-icons';

interface NoteObj{
  "noteId":number,
  "title": string,
    "description": string,
    "color": string,
    "isArchive": boolean,
    "isPinned": boolean,
    "isTrash": boolean
}

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Output() updateList =new EventEmitter<{data: NoteObj,action: string}>();
  @Input() NoteDetails!: NoteObj;
  @Input() containerName!:string;
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private noteService:NotesServiceService) { 
    iconRegistry.addSvgIconLiteral("colloborator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("color-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('delete-forever-icon', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON)) 
    iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))
  }

  ngOnInit(): void {
  }

  handleNoteCardIconsClick(action:string){
    if(action=="archive")
    {
      this.noteService.archiveNote(this.NoteDetails.noteId).subscribe(res=>
      this.updateList.emit({data:this.NoteDetails,action:"archive"}))
    }
    else if(action=="trash")
    {
      this.noteService.trashNote(this.NoteDetails.noteId).subscribe(res=>
      this.updateList.emit({data:this.NoteDetails,action:"trash"}))
    }
    else{
      this.noteService.updateNoteColor(this.NoteDetails.noteId,action).subscribe((res:any)=>this.updateList.emit({data:res,action:"color"}))
      
    }
  }

}
