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

        state.status= 'authenticated';
        state.uid= action.payload.uid;
        state.email= action.payload.email;
        state.displayName= action.payload.displayName;
        state.photoURL= action.payload.photoURL;
        state.erroMessage= null
      //sencente
    },

    logout: (state, {payload}) => {
      state.status= 'not-authenticated';
      state.uid= null;
      state.email= null;
      state.displayName= null;
      state.photoURL= null;
      state.erroMessage= payload?.erroMessage;
    },

    checkingCredentials: (state) => {
        state.status = 'checking'
    },
  },
})

export const { login, logout, checkingCredentials } = authSlice.actions