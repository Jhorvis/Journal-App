import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components"

export const JournalLayout = ({children}) => {

    const drawerWidth = 240;
  return (
    <Box sx={{display: 'flex'}}>
        <NavBar drawerWidth={drawerWidth} />
        <SideBar drawerWidth={drawerWidth}/>

        <Box 
            component='main'
            sx={{flexGrow: 1, p: 3}}
            >
        <Toolbar/>
        {children}
            
        </Box>

    </Box>
  )
}
