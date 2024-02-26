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
  selector: 'app-trach-container',
  templateUrl: './trach-container.component.html',
  styleUrls: ['./trach-container.component.scss']
})
export class TrachContainerComponent implements OnInit {

  searchText!:string;

  trashNoteList:NoteObj[]=[{
    "noteId":0,
  "title": "",
  "description": "",
  "color":"",
  "isArchive": false,
  "isPinned": false,
  "isTrash": true
  }];
  constructor(private noteService:NotesServiceService,private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe((res:NoteObj[])=>
    {
      this.trashNoteList = res.filter(ele => ele.isTrash === true);
    })
    this.dataService.currentSearchText.subscribe((state=>this.searchText=state))
  }

  updateTrashNoteList($event:{data:NoteObj,action:string})
  {
    if($event.action=="trash")
    {
      this.trashNoteList=this.trashNoteList.filter((ele,index)=>ele.noteId != $event.data.noteId) 
    }
    if ($event.action == "delete") {
      this.trashNoteList=this.trashNoteList.filter((ele,index)=>ele.noteId != $event.data.noteId)
    }
    
  }
}
