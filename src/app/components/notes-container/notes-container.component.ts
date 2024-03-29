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
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  searchText!:string;



  noteList:NoteObj[]=[{"noteId":0,
  "title": "",
  "description": "",
  "color":"",
  "isArchive": false,
  "isPinned": false,
  "isTrash": false,

  }];
  constructor(private notesService:NotesServiceService,private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.notesService.getAllNotes().subscribe((result:NoteObj[])=>
    {
      this.noteList=result.filter((ele,index) => !ele.isArchive && !ele.isTrash)
    })

    this.dataService.currentSearchText.subscribe((state=>this.searchText=state))
  }

  updateNotesList($event:any)        //to filter data in the NoteList to display in the NoteContainer
  {
    if($event.action=="create")
    {
      if(!$event.data.isArchive)
      {
        this.noteList=[$event.data,...this.noteList]
      }
    }
    else if($event.action=="archive" || $event.action=="trash" )
    {
        this.noteList=this.noteList.filter((ele,index)=>ele.noteId != $event.data.noteId)   
    }
    else if($event.action=="delete")
    {
      this.noteList=this.noteList.filter((ele,index)=>ele.noteId!=$event.data.noteId);
    }
    else if ($event.action == "edit") {
      
      this.noteList = this.noteList.map(ele => {
        console.log($event.data.title)
        if (ele.noteId == $event.data.noteId) {
          return $event.data; // Replace existing data with new data
        }
        return ele;
      });
    }
    // console.log($event);   
    else{
      this.noteList=this.noteList.map(ele=>{
        if(ele.noteId==$event.data.noteId) return $event.data
        return ele
      })
    }
  }

}
