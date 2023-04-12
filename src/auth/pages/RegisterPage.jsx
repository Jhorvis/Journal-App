import { HowToReg } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
    <form >

      <Grid container>
          <Grid
            item xs={12} sx={{ mt: 2 }}
          >
            <TextField 
              label="Full name"
              type="text"
              placeholder='John Doe'
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
              fullWidth
              
            />
          </Grid>
      </Grid>

        <Grid container spacing={2} sx={{mb: 2}}>

            <Grid item xs={12} sx={{mt: 2}}>
              <Button variant='contained' fullWidth>
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
