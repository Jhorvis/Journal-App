import { AddOutlined, MailOutline } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { fontSize } from "@mui/system"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views"
import { NothingSelectedView } from "../views/NothinSelectedView"

export const JournalPages = () => {
  return (
    <JournalLayout>
{     /* <NothingSelectedView/>*/}
    <NoteView/>

    <IconButton
      size="large"
      sx={{
        color: "white",
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', opacity: 0.9},
        position: "fixed",
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{fontSize: 30}}/>
    </IconButton>
    </JournalLayout>
  )

}
