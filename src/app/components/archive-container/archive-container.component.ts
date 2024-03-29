import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import DataServiceService from 'src/app/services/dataService/data-service.service';
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
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})

export class ArchiveContainerComponent implements OnInit {

  searchText!:string;

  archiveNoteList:NoteObj[]=[{
  "noteId":0,
  "title": "",
  "description": "",
  "color":"",
  "isArchive": true,
  "isPinned": false,
  "isTrash": false
  }];

  constructor(private noteService:NotesServiceService,private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe((res:NoteObj[])=>{
      this.archiveNoteList=res.filter((ele,index)=> ele.isArchive && ele.isTrash === false)
    })
    this.dataService.currentSearchText.subscribe((state=>this.searchText=state))
  }

  updateArchiveNotesList($event:{data:NoteObj,action:string})
  {
    if($event.action=="archive" || $event.action=="trash")
    {
      this.archiveNoteList=this.archiveNoteList.filter((ele,index)=>ele.noteId != $event.data.noteId) //after updating its going to remove from list
    }
    else{
      this.archiveNoteList=this.archiveNoteList.map(ele=>
        {
          if(ele.noteId==$event.data.noteId) return $event.data
          return ele
        })
    }
  }

}
