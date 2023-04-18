import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../journal/providers"
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

export const startRegisterWithEmailPassword = ({email, password, displayName}) => {

    return async(dispatch) => {
        dispatch(checkingCredentials())
        const result = await registerUserWithEmailPassword({email, password, displayName})

        if (!result.ok) dispatch(logout(result.error))

        console.log(result.error)
        
        if(result.ok) dispatch(login(result))
    }


}

export const startLoginWithEmailPassword = ({email, password}) => {

    return async(dispatch) => {

        console.log(password)

        const result  = await loginWithEmailPassword({email, password})
        
        if (!result.ok) dispatch(logout(result.error))

        console.log(result.error)
        
        if(result.ok) dispatch(login(result))
    }
}