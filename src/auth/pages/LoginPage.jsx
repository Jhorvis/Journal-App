import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import { Google, Key } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'

export const LoginPage = () => {



  const {status, errorMessage} = useSelector( state => state.auth)

  const checking = useMemo(() => status === 'checking', [status])

  const {email, password, onInputChange} =  useForm({
    email: '',
    password: ''
  })
  
  const onSubmit = (event) => {
    event.preventDefault();
      dispatch(startLoginWithEmailPassword({email, password}))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  const dispatch = useDispatch();

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <Grid container>
        
        <Grid
          item xs={12} sx={{ mt: 2 }}
        >
          <TextField 
            label="Correo"
            type="email"
            placeholder='jondoe@mydomain.com'
            name='email'
            onChange={onInputChange}
            value={email}
            fullWidth
            
          />

        <Grid
          item xs={12} sx={{ mt: 2 }}
          >
          <TextField 
            label="Contraseña"
            type="password"
            name="password"
            placeholder='*********'
            onChange={onInputChange}
            value={password}
            fullWidth
            
          />
        <Grid 
          container
          display={ !!errorMessage ? '': 'none' }
          sx={{ mt: 1 }}>
          <Grid 
             item 
             xs={ 12 } >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
        </Grid>

        </Grid>
            <Grid container spacing={2} sx={{mb: 2}}>

              <Grid item xs={12} sm={6} sx={{mt: 2}}>
                <Button 
                    type="submit" 
                    variant='contained' 
                    disabled={checking}
                    fullWidth>
                  <Key />
                  <Typography sx={{ml: 1}}> Sign-In </Typography>
                </Button>
              </Grid>

                <Grid item xs={12} sm={6} sx={{mt: 2}}>
                  <Button
                      onClick={onGoogleSignIn}
                      variant='contained'
                      disabled={checking}
                      fullWidth>
                      <Google />
                    <Typography sx={{ml: 1}}>Google</Typography>
                  </Button>
                </Grid>

              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Link component={RouterLink} color="inherit" to="/auth/register">
                  Sing-Upi
                </Link>

              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>      
  )
}
