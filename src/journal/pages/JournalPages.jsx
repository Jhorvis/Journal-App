import { useDispatch, useSelector } from "react-redux"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views"
import { startNewNote } from "../../store/journal/thunks"

export const JournalPages = () => {

  const { isSaving } = useSelector(state => state.journal)

  console.log(isSaving)

  const dispatch = useDispatch()

  const onNewNote = () => {
    dispatch(startNewNote())    
  }
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
      disabled= { isSaving }
      onClick={onNewNote}
    >
      <AddOutlined sx={{fontSize: 30}}/>
    </IconButton>
    </JournalLayout>
  )

}
