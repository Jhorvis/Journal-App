import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config';

const googleProvider = new GoogleAuthProvider;

export const singInWithGoogle = async () => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result)
        const user = result.user;
        
        const { displayName, email, photoURL, uid } = user;

        return {
            ok: true,
            displayName, 
            email, 
            photoURL,
            uid 
        }

    } catch (error) {
        return {
            ok: false,
            error : error.message
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user;
        await updateProfile(FirebaseAuth.currentUser, {displayName})

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
        
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            error : error.message
        }
    }
}