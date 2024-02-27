import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
import { REMINDER_ICON, EDIT_ICON, ARCHIVE_ICON, COLOR_PALATTE_ICON,COLLABRATOR_ICON,MORE_ICON, UNARCHIVE_ICON, DELETE_FOREVER_ICON, RESTORE_ICON } from 'src/assets/svg-icons';
import { EditComponentComponent } from '../edit-component/edit-component.component';

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
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private noteService:NotesServiceService,private dialog: MatDialog) { 
    iconRegistry.addSvgIconLiteral("colloborator-icon", sanitizer.bypassSecurityTrustHtml(COLLABRATOR_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("color-icon", sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('more-icon', sanitizer.bypassSecurityTrustHtml(MORE_ICON))
    iconRegistry.addSvgIconLiteral('unarchive-icon', sanitizer.bypassSecurityTrustHtml(UNARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('delete-forever-icon', sanitizer.bypassSecurityTrustHtml(DELETE_FOREVER_ICON)) 
    iconRegistry.addSvgIconLiteral('restore-icon', sanitizer.bypassSecurityTrustHtml(RESTORE_ICON))

  }


  // "noteId":number,
  // "title": string,
  //   "description": string,
  //   "color": string,
  //   "isArchive": boolean,
  //   "isPinned": boolean,
  //   "isTrash": boolean

  handleNoteEdit($event: any): void {
    const dialogRef = this.dialog.open(EditComponentComponent, {
      data: this.NoteDetails,
    });
    
    // Subscribe to the closing event of the dialog
    
    dialogRef.afterClosed().subscribe((result:NoteObj): void => {
      console.log(result);
      // Emit an event to notify the parent component about the edit action
      this.updateList.emit({
        data: result,
        action: "edit"
      });
    });
  }
  
  // data: {noteId:this.NoteDetails.noteId,title:this.NoteDetails.title,description:this.NoteDetails.description,color:this.NoteDetails.color,isArchive:this.NoteDetails.isArchive,isPinned:this.NoteDetails.isPinned}

  ngOnInit(): void {
  }

  handleNoteCardIconsClick(action:string){
    switch (action) {
      case "archive":
        this.noteService.archiveNote(this.NoteDetails.noteId).subscribe(res =>
          this.updateList.emit({ data: this.NoteDetails, action: "archive" })
        );
        break;
      case "trash":
        this.noteService.trashNote(this.NoteDetails.noteId).subscribe(res =>
          this.updateList.emit({ data: this.NoteDetails, action: "trash" })
        );
        break;
        case "delete":
          this.noteService.deleteNote(this.NoteDetails.noteId).subscribe(res=>this.updateList.emit({
            data:this.NoteDetails,action: "delete"})
          );
          break;        
      default:
        this.noteService.updateNoteColor(this.NoteDetails.noteId, action).subscribe((res: any) =>
          this.updateList.emit({ data: res, action: "color" })
        );
        break;
    }
    
  }


}
