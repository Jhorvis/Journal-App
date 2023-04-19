import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState : {
    isSaving: true
  },
  reducers: {
    action: (state) => {
      //sencente
    },
  },
})

export const { action } = journalSlice.actions