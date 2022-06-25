import { Injectable } from '@angular/core';
import { INoteService, Note } from "notes";
import { Observable, of } from 'rxjs';

enum MyApplicatioNoteTypes {
  Transactions = 1,
  Financings = 2,
}

@Injectable({
  providedIn: 'root'
})
export class NoteService implements INoteService {

  constructor() { }

  getNoteRouterLink(noteType: MyApplicatioNoteTypes, id: string | number): string[] {
    switch (noteType) {
      default: return ['/'];
    }
  }

  getNotes(): Observable<Note[]> {
    return of([{
      id: "Test",
      name: "Test"
    }]);
  }
}
