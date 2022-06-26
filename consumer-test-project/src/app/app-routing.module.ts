import { TestComponent } from './test/test.component';
import { MyApplicationNoteTypes, NoteService } from './services/note.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteTableComponent } from "notes";

const routes: Routes = [
  {
    path: "",
    component: TestComponent,
  },
  {
    path: 'notes',
    loadChildren: () => import('notes').then(m => m.NotesModule)
  },
  {
    path: ":id",
    children: [
      {
        path: 'notes-test',
        component: NoteTableComponent,
        data: { noteItemIdParamName: 'id', noteItemType: MyApplicationNoteTypes.Financings }
      }
    ]
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
