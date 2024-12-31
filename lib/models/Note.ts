export type NoteState = "active" | "archived" | "deleted";
export type NotePriority = "low" | "medium" | "high";

export interface Tag {
    id: string;
    name: string;
    createdAt: string;
    updatedAt?: string;
    parentId?: string; // Optional for tag hierarchy
}

export interface Note {
    id: string;
    title: string;
    content: string;
    contentType: "markdown" | "plaintext";
    tags: Tag[];
    state: NoteState;
    priority?: NotePriority;
    createdAt: string;
    updatedAt?: string;
}