import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadingNotes";
import { setNotes } from "./journalSlice";

export const startNewNote = () => {
    return async(dispatch, getState) => {

        dispatch( savingNewNote() )

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${ uid }/journal/notes`))
        await setDoc(newDoc, newNote)

        //! dispatch
         dispatch( addNewEmptyNote(newNote) )
         dispatch( setActiveNote(newNote) )
        

    }
}

export const startLoadingNotes = () => {

    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        
        const notes = await loadNotes(uid)
        
        dispatch( setNotes(notes) )

        /*
        notes.forEach(note  => {
           // console.log(note)
            dispatch( setNotes(note) )

        })*/


    }

}


export const startUpdateNotes = () => {

    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc(docRef, noteToFireStore, { merge: true })
    }
        
}
