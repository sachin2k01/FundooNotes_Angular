import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpServices/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor( private httpService:HttpServiceService) { }

  getAllNotes()
  {
    return this.httpService.getAllNotesApiCall("Notes/UserNotes");
  }

  createNote(data:object)
  {
    return this.httpService.createNoteApiCall("Notes/Notes",data);
  }

  archiveNote(noteId:number)
  {
    return this.httpService.archiveNoteApiCall("Notes/archieveNote",noteId)

  }

  trashNote(noteId:number)
  {
    return this.httpService.archiveNoteApiCall("Notes/trashNote",noteId)
  }

  updateNoteColor(noteId:number,color:string)
  {
    return this.httpService.changeNoteColorApiCall("Notes/addColorToNote",noteId,color)
  }

}
