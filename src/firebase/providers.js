import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { FirebaseAuth } from './config';

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