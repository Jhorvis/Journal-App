import { HowToReg } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRegisterWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  displayName: '',
  email: '',
  password: ''

}

const formValidations = {

  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const [formSubmited, setformSubmited] = useState(false)

  const {status, erroMessage} = useSelector(state => state.auth)

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );


  const dispatch = useDispatch()

 const onSubmit = (event) => {
  event.preventDefault();
  setformSubmited(true)
  if ( !isFormValid ) return;
  dispatch(startRegisterWithEmailPassword(formState))
 }

  return (
    <AuthLayout title="Register"> 
    <form onSubmit={onSubmit}>

      <Grid container>
          <Grid
            item xs={12} sx={{ mt: 2 }}
          >
            <TextField 
              label="Full name"
              type="text"
              placeholder='John Doe'
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
              fullWidth
              
            />
          </Grid>
          <Grid
            item xs={12} sx={{ mt: 2 }}
          >
            <TextField 
              label="Correo"
              type="email"
              placeholder='johndoe@mydomain.com'
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
              fullWidth
              
            />
          </Grid>
          <Grid
            item xs={12} sx={{ mt: 2 }}
            >
            <TextField 
              label="Contraseña"
              type="password"
              placeholder='*********'
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
              fullWidth
              
            />
          </Grid>
      </Grid>

        <Grid container spacing={2} sx={{mb: 2}}>

            <Grid item xs={12} sx={{mt: 2}}>
              <Alert severity='error'
                display={!!erroMessage?'':'none'}
              >
                  {erroMessage}
              </Alert>
                <hr />
              <Button 
                  variant='contained' 
                  type="submit" 
                  disabled={isCheckingAuthentication}
                  fullWidth>
                <HowToReg />
                <Typography sx={{ml: 1}}> REGISTER </Typography>
              </Button>
             </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Typography sx={{mr: 1}}>Do you have account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/">
                  Sing-In          
            </Link>

              </Grid>
      </form>
    </AuthLayout>
      
  )
}
