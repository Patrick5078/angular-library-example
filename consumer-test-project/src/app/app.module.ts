import { NoteService } from './services/note.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotesModule, NotesRoutingModule } from 'notes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
