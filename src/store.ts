import { configureStore } from '@reduxjs/toolkit'
import noteSlice from './reducers/noteSlice'
import selectedNoteSlice from './reducers/selectedNoteSlice'

export const store = configureStore({
    reducer: {
        notes: noteSlice,
        selectedNote: selectedNoteSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch