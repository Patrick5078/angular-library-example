import { Observable } from "rxjs";

export interface INoteService {
    getNoteRouterLink(noteType: any, id: any): string[];
    getNotes():  Observable<Note[]>;
}

export abstract class NoteService implements INoteService {
    abstract getNoteRouterLink(noteType: any, id: any): string[];
    abstract getNotes(): Observable<Note[]>;
}

export interface Note {
    name: string;
    id: string;
}