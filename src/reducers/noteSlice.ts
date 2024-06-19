import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NoteType {
    id: number;
    title: string;
    description: string;
}

export interface NotesState {
    notes: NoteType[]
}

const initialState: NotesState = {
    notes: []
}

export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        deleteNote: (state, action: PayloadAction<number>) => {
            const index = state.notes.findIndex((item, index) => item.id === action.payload);
            if (index === -1) return;
            state.notes.splice(index, 1);
        },
        addNote: (state, action: PayloadAction<Omit<NoteType, 'id'>>) => {
            const id = state.notes.length > 0 ? state.notes[state.notes.length - 1].id + 1 : 1
            const payload: NoteType = { id, ...action.payload }
            state.notes.push(payload)
        },
    },
})

export const { deleteNote, addNote } = noteSlice.actions

export default noteSlice.reducer