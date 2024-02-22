import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';

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
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
  noteList:NoteObj[]=[{"noteId":0,
  "title": "",
  "description": "",
  "color":"",
  "isArchive": false,
  "isPinned": false,
  "isTrash": false
  }];
  constructor(private notesService:NotesServiceService) { }

  ngOnInit(): void {
    this.notesService.getAllNotes().subscribe((result:NoteObj[])=>
    {
      this.noteList=result.filter((ele,index) => !ele.isArchive && !ele.isTrash)
    })
  }

  updateNotesList($event:{data:NoteObj,action:string})        //to filter data in the NoteList to display in the NoteContainer
  {
    if($event.action=="create")
    {
      if(!$event.data.isArchive)
      {
        this.noteList=[$event.data,...this.noteList]
      }
    }
    else if($event.action=="archive")
    {
      this.noteList=this.noteList.filter((ele,index)=>ele.noteId != $event.data.noteId)
    }
    else if($event.action=="trash"){
      this.noteList=this.noteList.filter((ele,index)=>ele.noteId !=$event.data.noteId)
    }
    // console.log($event);   
  }

}
