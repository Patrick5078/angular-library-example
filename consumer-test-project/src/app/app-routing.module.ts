import { TestComponent } from './test/test.component';
import { NoteService } from './services/note.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesModule } from 'notes';

const routes: Routes = [
  {
    path: "",
    component: TestComponent,
  },
  {
    path: 'notes',
    loadChildren: () => import('notes').then(m => m.NotesModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
