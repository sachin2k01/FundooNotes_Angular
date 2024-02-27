import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoteCardComponent } from '../note-card/note-card.component';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
import { Action } from 'rxjs/internal/scheduler/Action';

interface NoteObj {
  "noteId":number,
  "title": string,
  "description": string,
  "color":string,
  "isArchive": boolean,
  "isPinned": boolean,
  "isTrash": boolean,
}


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {

  noteId!:number;
  title!:string;
  description!:string;
  archive:boolean=false;
  trash:boolean=false;
  color:string="#ffffff";


  @Output() updateList =new EventEmitter<{data:NoteObj,action:string}>()

  constructor(private dialogRef: MatDialogRef<NoteCardComponent>,
    @Inject(MAT_DIALOG_DATA) data:{title:string,description:string,noteId:number},private noteservice:NotesServiceService) {
      this.title=data.title;
      this.description=data.description;
      this.noteId=data.noteId;
     }

  

  ngOnInit(): void {
  }

  handleEditNotes(){
    // Store the note data in a variable
    const noteData = {
      noteId: this.noteId,
      title: this.title,
      description: this.description
    }; 
   
    // Update the note using the service
    this.noteservice.updateNote(noteData).subscribe((res) => {
      debugger
      // Close the dialog and pass updated note data to the caller
      this.dialogRef.close({
        data: res
      });
    });
  }
  
  // this.dialogRef.close({data:{noteId:this.noteId,title:this.title,description:this.description}}
  


  handleCreateNoteIconsClick(action:string){
    if(action=="archive"){
      this.archive=!this.archive;
    }
    else if(action=="trash"){
      this.trash=!this.trash;
    }
    else{
      this.color=action;
    }
  }

}
