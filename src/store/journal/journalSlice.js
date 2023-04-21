import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState : {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null

  },
  reducers: {

    savingNewNote: (state) => {

      state.isSaving = true;

    },

    addNewEmptyNote: (state, action) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      //sencente
    },
    setSaving: (state) => {
      //sencente
    },
    updateNote: (state, action) => {
      //sencente
    },
    deleteNodeById: (state, action) => {
      //sencente
    },
  },
})

export const { 
              savingNewNote,
              addNewEmptyNote,
              setActiveNote,
              setNotes,
              setSaving,
              updateNote,
              deleteNodeById } = journalSlice.actions