import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteTableComponent } from './components/note-table/note-table.component';

const routes: Routes = [
  { path: '', component: NoteTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }