import { useState } from "react"
import NavigationDrawer from '../../components/drawers/NavigationDrawer'
import MainAppBar from '../../components/appBar/MainAppBar'
import { ColorModeSwitcher } from "../../components/system/ColorModeSwitcher"
import { Outlet } from 'react-router-dom'
import { Box, Grid } from "@chakra-ui/react"


export const BaseLayout = () => {
  let [visibility, setVisibility] = useState(false)
  
  const toggleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="0vh">
          <MainAppBar toggleVisibility={toggleVisibility} >
            <Box>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Box>
          </MainAppBar>
          <NavigationDrawer visibility={visibility} onClose={() => setVisibility(false)} />
          <Box>
            <Outlet />
          </Box>
      </Grid>
    </Box>
  )
}
