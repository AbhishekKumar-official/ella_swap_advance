import React, { useState } from 'react'  
import {Route,Switch} from "react-router-dom"
import styled,{ThemeProvider} from "styled-components"
import {lightTheme,darkTheme,GlobalStyle} from "./themes"
import Drawer from "../src/Components/Sidebar/Drawer"

const StyledDiv = styled.div`

  color:${props => props.theme.fontColor}
`;
const App = () => {
  const [theme,setTheme] = useState("dark")

  const handleThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
        <StyledDiv>
          <Drawer themeToggler={handleThemeToggle}/>
          <Switch>
            
          </Switch>
        </StyledDiv>
      </ThemeProvider>
   
    )
}
export default App