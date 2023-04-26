import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { setActiveNote } from "../../../store/journal/journalSlice"
import { useDispatch } from "react-redux"


export const SideBarItem = ({ note }) => {

    const dispatch = useDispatch()

    const onActiveNote = () => {

        dispatch(setActiveNote(note))

    }

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onActiveNote }>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ note.title } />
                <ListItemText secondary={ note.body } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
