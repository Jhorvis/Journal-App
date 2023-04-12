import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState : {
    status: 'not-authenticated', //checking, authenticated, not-authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    erroMessage: null
  },
  reducers: {
    login: (state, action) => {
      //sencente
    },

    logout: (state, payload) => {
        //sencente
    },

    checkingCredentials: (state) => {
        state.status = 'checking'
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions