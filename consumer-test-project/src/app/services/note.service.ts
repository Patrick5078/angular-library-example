import { Injectable } from '@angular/core';
import { INoteService, Note } from "notes";

enum MyApplicatioNoteTypes {
  Transactions = 1,
  Financings = 2,
}

@Injectable({
  providedIn: 'root'
})
export class NoteService implements INoteService {

  constructor() { }

  getNoteRouterLink(noteType: MyApplicatioNoteTypes, id: any): string[] {
    switch (noteType) {
      default: return ['/'];
    }
  }

  getNotes(): Note[] {
    return [{
      id: "Test",
      name: "Test"
    }];
  }
}
