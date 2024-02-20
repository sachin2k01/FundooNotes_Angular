import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  noteList:[]=[];
  constructor(private notesService:NotesServiceService) { }

  ngOnInit(): void {
    this.notesService.getAllNotes().subscribe(result=>this.noteList=result)
  }

}
