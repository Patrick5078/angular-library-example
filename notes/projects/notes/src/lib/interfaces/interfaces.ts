export interface INoteService {
    getNoteRouterLink(noteType: any, id: any): string[];
    getNotes(): Note[];
}

export abstract class NoteService implements INoteService {
    abstract getNoteRouterLink(noteType: any, id: any): string[];
    abstract getNotes(): Note[];
}

export interface Note {
    name: string;
    id: string;
}