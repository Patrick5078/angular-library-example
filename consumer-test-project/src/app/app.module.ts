import { NoteTableComponent, NotesModule } from 'notes';
import { NoteService } from './services/note.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NotesModule,
  ],
  providers: [{
    provide: "NoteService",
    useClass: NoteService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
