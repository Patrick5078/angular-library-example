import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note, NoteService } from '../../interfaces/interfaces';

@Component({
  selector: 'lib-note-table',
  templateUrl: './note-table.component.html',
  styleUrls: ['./note-table.component.scss']
})
export class NoteTableComponent implements OnInit {

  constructor(
    @Inject("NoteService") public noteService: NoteService,
    private activatedRoute: ActivatedRoute,
  ) { }

  notes: Note[] = []
  isLoading = false;
  noteItemId?: any;
  noteItemType: any;

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.data.noteItemIdParamName) {
      this.noteItemId = this.activatedRoute.snapshot.params[this.activatedRoute.snapshot.data.noteItemIdParamName];
    }
    
    if (this.activatedRoute.snapshot.data.noteItemType) {
      this.noteItemType = this.activatedRoute.snapshot.data.noteItemType;
    }
    
    console.log("🚀 ~ file: note-table.component.ts ~ line 25 ~ NoteTableComponent ~ ngOnInit ~ this.noteItemId", this.noteItemId)
    console.log("🚀 ~ file: note-table.component.ts ~ line 29 ~ NoteTableComponent ~ ngOnInit ~ this.noteItemType", this.noteItemType)
    
    this.getNotes();
  }

  getNotes() {
    this.isLoading = true;
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes;
      this.isLoading = false;
    }, err => {
      
    });
  }
}
