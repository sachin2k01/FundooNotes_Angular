import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrachContainerComponent } from './components/trash-container/trach-container.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FundoHeaderComponent } from './components/fundo-header/fundo-header.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ArchiveContainerComponent,
    TrachContainerComponent,
    NotesContainerComponent,
    DashboardLayoutComponent,
    NoteCardComponent,
    SideNavComponent,
    FundoHeaderComponent,
    CreateNoteComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
