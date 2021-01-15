import React, { useState } from 'react'  
import {Route,Switch} from "react-router-dom"
import styled,{ThemeProvider} from "styled-components"
import {lightTheme,darkTheme,GlobalStyle} from "./themes"
import Drawer from "../src/Components/Sidebar/Drawer"
import Configuration from "./pages/Configuration"
import PairExplorer from "./pages/PairExplorer"
import UserAccount from "./pages/UserAccount"
import DextBoard from "./pages/DextBoard"
import PoolExplorer from "./pages/PoolExplorer"
import "./App.css"

const StyledDiv = styled.div`

  color:${props => props.theme.fontColor};
  background-color:${props => props.theme.sidebarBgColor}
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
            <Route exact path="/dextboard" component={DextBoard}/>
            <Route exact path="/pool-explorer" component={PoolExplorer}/>
            <Route exact path="/user-account" component={UserAccount}/>
            <Route exact path="/pair-explorer" component={PairExplorer}/>
            <Route exact path="/configuration" component={Configuration}/>
          </Switch>
        </StyledDiv>
      </ThemeProvider>
   
    )
}
export default App