import { singInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials())

        const result = await singInWithGoogle()
        
        if (!result.ok) dispatch(logout(result.error))

        console.log(result.error)
        
        if(result.ok) dispatch(login(result))

    }
}