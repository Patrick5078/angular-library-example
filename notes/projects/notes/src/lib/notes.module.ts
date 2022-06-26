import { NotesRoutingModule } from './note-routing-module';
import { NgModule } from '@angular/core';
import { NoteTableComponent } from './components/note-table/note-table.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NoteTableComponent,
  ],
  imports: [
    NotesRoutingModule,
    CommonModule,
  ],
  exports: [
    NoteTableComponent,
  ],
  providers: []
})
export class NotesModule { }
