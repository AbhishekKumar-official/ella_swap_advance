import {createGlobalStyle} from "styled-components"

export const lightTheme = {
    body : "#f5f6f8",
    fontColor: "#5a6169",
    drawerBgColor: "#fff",
    drawerBoxShadow: "0 0.125rem 9.375rem rgba(90,97,105,.1), 0 0.25rem 0.5rem rgba(90,97,105,.12), 0 0.9375rem 1.375rem rgba(90,97,105,.1), 0 0.4375rem 2.1875rem rgba(165,182,201,.1)",
    drawerHeaderBg: "#20263c",
    drawerHeaderBorder: "#15192a",
    drawertitleBorder: "#15192a",
    drawertitleColor: "#9ea8b9",
    drawerulBorder: "#15192a",
    drawerlinkColor: "#cacedb",
    drawerlinkActiveColor: "#00b8d8",
    drawerlinkActiveBgColor: "#2f3446",
    drawerlinkActiveBoxShadowColor: "inset 0.1875rem 0 0 #00b8d8",
    drawerlinkUniswapColor: "#ff2d79",
    drawerlinkUniswapColor: "#ffffff",
    drawerlinkIconColor: "#cacedb",
    drawerlinkIconActiveColor: "#d0be0d",
    themeSeparatorColor: "#ffffff",
}
export const darkTheme = {
    body : "#020416",
    fontColor: "#cacedb",
    drawerBgColor: "linear-gradient(0deg,#020416,#2f3446)",
    drawerBoxShadow: "0 0.12rem 2rem rgba(0,0,0,.47)",
    drawerHeaderBg: "#20263c",
    drawerHeaderBorder: "#15192a",
    drawertitleBorder: "#15192a",
    drawertitleColor: "#9ea8b9",
    drawerulBorder: "#15192a",
    drawerlinkColor: "#cacedb",
    drawerlinkBgColor: "transparent",
    drawerlinkActiveColor: "#00b8d8",
    drawerlinkActiveBgColor: "#2f3446",
    drawerlinkActiveBoxShadowColor: "inset 0.1875rem 0 0 #00b8d8",
    drawerlinkUniswapBgColor: "#ff2d79",
    drawerlinkUniswapColor: "#ffffff",
    drawerlinkIconColor: "#cacedb",
    drawerlinkIconActiveColor: "#d0be0d",
    themeSeparatorColor: "#ffffff",
}

export const GlobalStyle = createGlobalStyle`


        body {
            background-color: ${props => props.theme.body};
        }
        .drawer{
            background: ${props => props.theme.drawerBgColor};
            box-shadow: ${props => props.theme.drawerBoxShadow};
        }
        .drawer-header{
            background-color: ${props => props.theme.drawerHeaderBg};
            border-bottom-color: ${props => props.theme.drawerHeaderBorder};
        }
        .drawer-body h6{ 
            border-bottom-color: ${props => props.theme.drawertitleBorder};
            color: ${props => props.theme.drawertitleColor};
        }
        .drawer-body h6.uniswap{ 
            background-color: ${props => props.theme.drawerlinkUniswapBgColor};
            color: ${props => props.theme.drawerlinkUniswapColor};
        }
        .drawer-body ul{
            border-bottom-color: ${props => props.theme.drawerulBorder};
        }
        .drawer-body ul li a{
            color: ${props => props.theme.drawerlinkColor};
        }
        .drawer-body ul li a.active, 
        .drawer-body ul li a:hover, 
        .drawer-body ul li a:focus{
            color: ${props => props.theme.drawerlinkActiveColor};
            background-color: ${props => props.theme.drawerlinkActiveBgColor};
            box-shadow: ${props => props.theme.drawerlinkActiveBoxShadowColor};
        }
        .theme-icon{
            color: ${props => props.theme.drawerlinkIconColor};
        }
        .theme-active{
            color: ${props => props.theme.drawerlinkIconActiveColor};
        }
        .theme-separator{
            color: ${props => props.theme.themeSeparatorColor};
        }
        .drawer-body ul li a.theme-mode:hover, 
        .drawer-body ul li a.theme-mode:focus{
            color: ${props => props.theme.drawerlinkColor};
            background-color: ${props => props.theme.drawerlinkBgColor};
        }




`