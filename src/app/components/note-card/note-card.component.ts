import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Interface } from 'readline';
import { NOTE_ICON, REMINDER_ICON, EDIT_ICON, ARCHIVE_ICON, TRASH_ICON } from 'src/assets/svg-icons';

interface NoteObj{
  "title": string,
    "description": string,
    "color": string,
    "remainder": string,
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

@Input() NoteDetails!: NoteObj;
  constructor( iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIconLiteral("note-icon", sanitizer.bypassSecurityTrustHtml(NOTE_ICON))
    iconRegistry.addSvgIconLiteral("reminder-icon", sanitizer.bypassSecurityTrustHtml(REMINDER_ICON))
    iconRegistry.addSvgIconLiteral("edit-icon", sanitizer.bypassSecurityTrustHtml(EDIT_ICON))
    iconRegistry.addSvgIconLiteral('archive-icon', sanitizer.bypassSecurityTrustHtml(ARCHIVE_ICON))
    iconRegistry.addSvgIconLiteral('trash-icon', sanitizer.bypassSecurityTrustHtml(TRASH_ICON))
  }

  ngOnInit(): void {
  }

}
