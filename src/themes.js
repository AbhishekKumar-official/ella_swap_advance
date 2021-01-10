import {createGlobalStyle} from "styled-components"

export const lightTheme = {
    body : "#f5f6f8",
    fontColor: "#5a6169",
    drawerBgColor: "#fff",
    drawerBoxShadow: "0 0.125rem 9.375rem rgba(90,97,105,.1), 0 0.25rem 0.5rem rgba(90,97,105,.12), 0 0.9375rem 1.375rem rgba(90,97,105,.1), 0 0.4375rem 2.1875rem rgba(165,182,201,.1)",
    drawerHeaderBg: "#20263c",
    drawerHeaderBorder: "#15192a",
    drawertitleBorder: "#15192a",
    drawertitleColor: "#9ea8b9"
}
export const darkTheme = {
    body : "#020416",
    fontColor: "#cacedb",
    drawerBgColor: "linear-gradient(0deg,#020416,#2f3446)",
    drawerBoxShadow: "0 0.12rem 2rem rgba(0,0,0,.47)",
    drawerHeaderBg: "#20263c",
    drawerHeaderBorder: "#15192a",
    drawertitleBorder: "#15192a",
    drawertitleColor: "#9ea8b9"
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




`