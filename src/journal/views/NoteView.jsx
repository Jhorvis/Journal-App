import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startUpdateNotes } from '../../store/journal/thunks';
import Swal from 'sweetalert2';



export const NoteView = ({active}) => {

   const { active:note, messageSaved, isSaving } = useSelector(state => state.journal)

   const { onInputChange, title, body, date, formState } = useForm(note)

   const dateString = useMemo(() => {
    const newDate = new Date( date );
    return newDate.toUTCString();

   }, [date])

   const dispatch = useDispatch()

   useEffect(() => {
     dispatch(setActiveNote(formState))
   
   }, [formState])

   const onUpdateNote = () => {
        dispatch(startUpdateNotes())
   }
   
   useEffect(() => {

    if (!!messageSaved) {
    Swal.fire(
        'Guardado Correctamente!',
        messageSaved,
        'success'
      )
    }
   }, [messageSaved])
   


  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' > { dateString } </Typography>
        </Grid>
        <Grid item>
            <Button 
                color="primary" 
                sx={{ padding: 2 }}
                onClick={ onUpdateNote }
                disabled={!!isSaving}
                >
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>
        <form >
        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                name='title'
                value={title}
                onChange={onInputChange}
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                name='body'
                placeholder="¿Qué sucedió en el día de hoy?"
                value={body}
                onChange={onInputChange}
                minRows={ 5 }
            />
        </Grid>
        </form>
        {/* Image gallery */}
        <ImageGallery />

    </Grid>
  )
}