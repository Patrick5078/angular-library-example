import { Component, Inject, OnInit } from '@angular/core';
import { Note, NoteService } from '../../interfaces/interfaces';

@Component({
  selector: 'lib-note-table',
  templateUrl: './note-table.component.html',
  styleUrls: ['./note-table.component.scss']
})
export class NoteTableComponent implements OnInit {

  constructor(
    @Inject("NoteService") public noteService: NoteService,
  ) { }

  notes: Note[] = []
  isLoading = false;

  ngOnInit(): void {
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
