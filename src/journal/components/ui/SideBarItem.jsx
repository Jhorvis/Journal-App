import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


export const SideBarItem = ({ note }) => {

  return (
    <ListItem disablePadding>
        <ListItemButton>
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
