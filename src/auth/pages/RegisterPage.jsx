import { HowToReg } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'

const dataForm = {
  displayName: '',
  email: '',
  password: ''

}

export const RegisterPage = () => {

 const {displayName, email, password, onInputChage, state} = useForm(dataForm);

 
 const onSubmit = (event) => {
  event.preventDefault();
  console.log(state)
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
              onChange={onInputChage}
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
              onChange={onInputChage}
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
              onChange={onInputChage}
              fullWidth
              
            />
          </Grid>
      </Grid>

        <Grid container spacing={2} sx={{mb: 2}}>

            <Grid item xs={12} sx={{mt: 2}}>
              <Button variant='contained' type="submit" fullWidth>
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
