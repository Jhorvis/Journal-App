import { useDispatch } from 'react-redux'
import {Link as RouterLink} from 'react-router-dom'
import { Google, Key } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'

export const LoginPage = () => {

 const {email, password, onInputChage} =  useForm({
    email: 'jhorvissanchez@gmail.com',
    password: '123456'
  })
  
  const onSubmit = (event) => {
    event.preventDefault();
      dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  const dispatch = useDispatch();

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
        
        <Grid
          item xs={12} sx={{ mt: 2 }}
        >
          <TextField 
            label="Correo"
            type="email"
            placeholder='jondoe@mydomain.com'
            name='email'
            onChange={onInputChage}
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
            onChange={onInputChage}
            value={password}
            fullWidth
            
          />
        </Grid>
            <Grid container spacing={2} sx={{mb: 2}}>

              <Grid item xs={12} sm={6} sx={{mt: 2}}>
                <Button type="submit" variant='contained' fullWidth>
                  <Key />
                  <Typography sx={{ml: 1}}> Sign-In </Typography>
                </Button>
              </Grid>

                <Grid item xs={12} sm={6} sx={{mt: 2}}>
                  <Button
                      onClick={onGoogleSignIn}
                      variant='contained' 
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
