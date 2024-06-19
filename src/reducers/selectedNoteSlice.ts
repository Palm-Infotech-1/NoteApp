import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SelectedNoteType {
    index?: number;
}

export interface SelectedNoteState {
    selectedNote: SelectedNoteType
}

const initialState: SelectedNoteState = {
    selectedNote: { index: undefined }
}

export const selectedNoteSlice = createSlice({
    name: 'selectedNote',
    initialState,
    reducers: {
        show: (state, action: PayloadAction<number>) => {
            state.selectedNote.index = action.payload
        },
        hide: (state) => {
            state.selectedNote.index = undefined
        },
    },
})

export const { show, hide } = selectedNoteSlice.actions

export default selectedNoteSlice.reducer