import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { ArchiveContainerComponent } from './components/archive-container/archive-container.component';
import { TrachContainerComponent } from './components/trash-container/trach-container.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { AuthGuardService } from './services/authGuardService/auth-guard.service';
import { EditComponentComponent } from './components/edit-component/edit-component.component';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"dashboard",
    component:DashboardLayoutComponent,canActivate:[AuthGuardService],
    children:[{
      path:"notes",
      component:NotesContainerComponent
    },
  {
    path:"archive",
    component:ArchiveContainerComponent
  },
{
  path:"trash",
  component:TrachContainerComponent
},
{
  path:"createNote",
  component:CreateNoteComponent
},
{
  path:"editNote",
  component:EditComponentComponent
}]
  },
  {
    path:"notecard",
    component:NoteCardComponent
  },
  {path:"navbar",
component:SideNavComponent},
{
  path:"createnote",
  component:CreateNoteComponent
},
{
  path:"editNote",
  component:EditComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
