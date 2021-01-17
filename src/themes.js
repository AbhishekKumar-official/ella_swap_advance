import {createGlobalStyle} from "styled-components"
import backgroundDark from "../src/images/dark-bg.png"

export const lightTheme = {
    body : "#f5f6f8",
    fontColor: "#5a6169",
    drawerBgColor: "#ffffff",
    drawerBoxShadow: "0 0.125rem 9.375rem rgba(90,97,105,.1), 0 0.25rem 0.5rem rgba(90,97,105,.12), 0 0.9375rem 1.375rem rgba(90,97,105,.1), 0 0.4375rem 2.1875rem rgba(165,182,201,.1)",
    drawerHeaderBg: "#ffffff",
    drawerHeaderBorder: "#e1e5eb",
    drawertitleBorder: "#e1e5eb",
    drawertitleColor: "#cacedb",
    drawerulBorder: "#e1e5eb",
    drawerlinkColor: "#3d5170",
    drawerlinkBgColor: "transparent",
    drawerlinkActiveColor: "#00b8d8",
    drawerlinkActiveBgColor: "#fbfbfb",
    drawerlinkActiveBoxShadowColor: "inset 0.1875rem 0 0 #00b8d8",
    drawerlinkUniswapBgColor: "#ff2d79",
    drawerlinkUniswapColor: "#ffffff",
    drawerlinkIconColor: "#cacedb",
    drawerlinkIconActiveColor: "#d0be0d",
    themeSeparatorColor: "#cacedb",
    scrollbarTrack: "#ffffff",
    scrollbarThumbBg: "#818ea3",
    scrollbarThumbBorder: "#ffffff",
    configurationpageTitle: "#3d5170",
    configurationcardBg: "#ffffff",
    configurationcardBoxShadow: "0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1)",
    configurationcardheaderBg: "#ffffff",
    configurationcardheaderBorder: "#e1e5eb",
    configurationcardtitleColor: "#3d5170",
    configurationcardbodyBg: "#ffffff",
    toggleBg: "#ffffff",
    toggleBorder: "#e1e5eb",
    togglePointerBg: "#e1e5eb",
    customselectBg: "#ffffff",
    customselectColor: "#495057",
    customselectBorder: "#e1e5eb",
    customselectHoverColor: "#495057",
    customselectHoverBorder: "#b3bdcc",
    customselectFocusShadow: "0 0.313rem 0.719rem rgba(0,123,255,.1), 0 0.156rem 0.125rem rgba(0,0,0,.06)",
    customselectOptionColor: "#495057",
    customselectOptionBorder: "#e1e5eb",
    customselectOptionBg: "#ffffff",
    authformCardbodyShadow: "inset 0 4px 0 0 #00b8d8",
    authformTitleColor: "#3d5170",
    boxHomeHeaderBg: "transparent",
    boxHomeHeaderPinkBorder: "#cc0162",
    boxHomeHeaderImgBg: "#ffffff",
    boxHomeHeaderImgBoxShadow: "0 0 0.5rem rgba(0,0,0,.31)",
    boxHomeHeaderImgBorder: "#cc0162",
    boxHomeHeaderColor: "#3d5170",
    boxHomeBodyBg: "rgba(0,0,0,.04)",
    inputContainerInputColor: "#495057",
    inputContainerInputBg: "#ffffff",
    inputContainerInputBoxShadow: "box-shadow .25s cubic-bezier(.27,.01,.38,1.06),border .25s cubic-bezier(.27,.01,.38,1.06)",
    inputContainerInputBorder: "#e1e5eb !important",
    buttonHelpBg: "rgba(0,0,0,.04)",
    buttonHelpBorder: "#3d5170 !important",
    boxHomeBodyFitHeightH6Color: "#3d5170",
    boxHomeBodyFitHeightH6Border: "#212529 !important",
    cardUniswapColor: "#cc0162",
    cardIdexColor: "#058dc3",
    cardSushiColor: "#bd9175",
    cardMooniswapColor: "#5f7c9e",
    cardKucoinColor: "#23ae8e",
    boxHomeHeaderIdexImgBorder: "#058dc3",
    boxHomeHeaderSushiImgBorder: "#bd9175",
    boxHomeHeaderMooniswapImgBorder: "#5f7c9e",
    boxHomeHeaderKucoinImgBorder: "#23ae8e",
    
    boxHomeHeadeBoxImgShadow: "0 0 0.5rem rgba(0,0,0,.31)",
    headerHotPairsBorder: "hsla(0,0%,90.2%,.18)",
    headerHotPairsColor: "#cacedb",
    listGroupItemBorder: "#15192a",
    listGroupItemBg: "#323852",
    listGroupItemInputColor: "#cacedb !important",
    listGroupItemInputBg: "hsla(0,0%,100%,.12) !important",
    listGroupItemInputBorder: "#868e96",
    tableColor: "#cacedb",
    tableThColor: "#ffffff",
    tableThBg: "#2f3446",
    tableTdBorder: "#15192a",
    tableHoverBg: "hsla(0,0%,100%,.1)",
    pagerColor: "#cacedb",
    imgLogoBg: "#ffffff",
    dextScoreBorder: "#262c43",
    dextScoreBg: "rgba(55,59,64,.5)",
    cardHeaderBtnWhiteColor: "#00b8d8",
    cardHeaderBtnWhiteBg: "rgba(0,184,216,.22)",
    cardHeaderBtnWhiteBorder: "#00b8d8",
    cardHeaderH6Color: "#ffffff",
    noCardTxtContentColor: "#ffffff",
    autocompleteContainerColor: "#cacedb",
    autocompleteContainerBg: "hsla(0,0%,100%,.12)",
    autocompleteContainerBorder: "#868e96",
    footerBg: "#20263c",
    footerBorder: "#363946",
    tooltipInnerBg: "#1F1F1F",
    tooltipInnerBorder: "#868E96",
    tooltipInnerColor: "#CACEDB",
    tooltipBorder: "#868E96",
    MuiDialogPaperBg: "#262c43",
    MuiDialogPaperColor: "#cacedb",
    MuiDialogActionsBorder: "#15192a",
    moreinfoContentColor: "#cacedb",
    walletsearchContainerInputColor: "#cacedb",
    walletsearchContainerInputBg: "hsla(0,0%,100%,.12)",
    walletsearchContainerInputBorder: "#868e96",
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
    scrollbarTrack: "#262C43",
    scrollbarThumbBg: "#020417",
    scrollbarThumbBorder: "#262C43",
    configurationpageTitle: "#ffffff",
    configurationcardBg: "#323852",
    configurationcardBoxShadow: "0 0 0.5rem rgba(0,0,0,.68)",
    configurationcardheaderBg: "#323852",
    configurationcardheaderBorder: "#15192a",
    configurationcardtitleColor: "#ffffff",
    configurationcardbodyBg: "rgba(21,25,42,.39)",
    toggleBg: "hsla(0,0%,100%,.12)",
    toggleBorder: "#868e96",
    togglePointerBg: "#e1e5eb",
    customselectBg: "rgba(0,184,216,.22)",
    customselectColor: "#00b8d8",
    customselectBorder: "#00b8d8",
    customselectHoverColor: "#ffffff",
    customselectHoverBorder: "#ffffff",
    customselectFocusShadow: "0 0.313rem 0.719rem rgba(0,123,255,.1), 0 0.156rem 0.125rem rgba(0,0,0,.06)",
    customselectOptionColor: "#00b8d8",
    customselectOptionBorder: "#00b8d8",
    customselectOptionBg: "rgba(0,184,216,.22)",
    authformCardbodyShadow: "inset 0 4px 0 0 #00b8d8",
    authformTitleColor: "#ffffff",
    boxHomeHeaderBg: "rgba(55,59,64,.5)",
    boxHomeHeaderPinkBorder: "#cc0162",
    boxHomeHeaderImgBg: "#ffffff",
    boxHomeHeaderImgBoxShadow: "0 0 .5rem rgba(0,0,0,.68)",
    boxHomeHeaderImgBorder: "#e6e6e6",
    boxHomeHeaderColor: "#e6e6e6",
    boxHomeBodyBg: "rgba(0,0,0,.55)",
    inputContainerInputColor: "#cacedb",
    inputContainerInputBg: "hsla(0,0%,100%,.12)",
    inputContainerInputBoxShadow: "box-shadow .25s cubic-bezier(.27,.01,.38,1.06),border .25s cubic-bezier(.27,.01,.38,1.06)",
    inputContainerInputBorder: "#868e96 !important",
    buttonHelpBg: "rgba(0,0,0,.5)",
    buttonHelpBorder: "hsla(0,0%,100%,.7) !important",
    boxHomeBodyFitHeightH6Color: "#ffffff",
    boxHomeBodyFitHeightH6Border: "hsla(0,0%,100%,.267) !important",
    mainDextboardContainerBg: "<img src={backgroundDark} />",
    boxHomeHeadeBoxImgShadow: "0 0 .5rem rgba(0,0,0,.68)",
    headerHotPairsBorder: "hsla(0,0%,90.2%,.18)",
    headerHotPairsColor: "#cacedb",
    listGroupItemBorder: "#15192a",
    listGroupItemBg: "#323852",
    listGroupItemInputColor: "#cacedb !important",
    listGroupItemInputBg: "hsla(0,0%,100%,.12) !important",
    listGroupItemInputBorder: "#868e96",
    tableColor: "#cacedb",
    tableThColor: "#ffffff",
    tableThBg: "#2f3446",
    tableTdBorder: "#15192a",
    tableHoverBg: "hsla(0,0%,100%,.1)",
    pagerColor: "#cacedb",
    imgLogoBg: "#ffffff",
    dextScoreBorder: "#262c43",
    dextScoreBg: "rgba(55,59,64,.5)",
    cardHeaderBtnWhiteColor: "#00b8d8",
    cardHeaderBtnWhiteBg: "rgba(0,184,216,.22)",
    cardHeaderBtnWhiteBorder: "#00b8d8",
    cardHeaderH6Color: "#ffffff",
    noCardTxtContentColor: "#ffffff",
    autocompleteContainerColor: "#cacedb",
    autocompleteContainerBg: "hsla(0,0%,100%,.12)",
    autocompleteContainerBorder: "#868e96",
    footerBg: "#20263c",
    footerBorder: "#363946",
    tooltipInnerBg: "#1F1F1F",
    tooltipInnerBorder: "#868E96",
    tooltipInnerColor: "#CACEDB",
    tooltipBorder: "#868E96",
    MuiDialogPaperBg: "#262c43",
    MuiDialogPaperColor: "#cacedb",
    MuiDialogActionsBorder: "#15192a",
    moreinfoContentColor: "#cacedb",
    walletsearchContainerInputColor: "#cacedb",
    walletsearchContainerInputBg: "hsla(0,0%,100%,.12)",
    walletsearchContainerInputBorder: "#868e96",
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
            color: ${props => props.theme.drawerlinkIconColor} !important;
        }
        .theme-active{
            color: ${props => props.theme.drawerlinkIconActiveColor} !important;
        }
        .theme-separator{
            color: ${props => props.theme.themeSeparatorColor};
        }
        .drawer-body ul li a.theme-mode:hover, 
        .drawer-body ul li a.theme-mode:focus{
            color: ${props => props.theme.drawerlinkColor};
            background-color: ${props => props.theme.drawerlinkBgColor};
        }
        .page-title{
            color: ${props => props.theme.configurationpageTitle};
        }
        .card{
            background-color: ${props => props.theme.configurationcardBg};
            box-shadow: ${props => props.theme.configurationcardBoxShadow};
        }
        .card-header{
            background-color: ${props => props.theme.configurationcardheaderBg};
            border-color: ${props => props.theme.configurationcardheaderBorder} !important;
        }
        .card-header .title{
            color: ${props => props.theme.configurationcardtitleColor};
        }
        .card-body{
            background-color: ${props => props.theme.configurationcardbodyBg};
        }
        .custom-control-label:before{
            background-color: ${props => props.theme.toggleBg};
            border-color: ${props => props.theme.toggleBorder};
        }
        .custom-control-label:after{
            background-color: ${props => props.theme.togglePointerBg} !important;
        }
        .custom-select{
            background-color: ${props => props.theme.customselectBg};
            border-color: ${props => props.theme.customselectBorder};
            color: ${props => props.theme.customselectColor};
        }
        .custom-select:hover{
            border-color: ${props => props.theme.customselectHoverBorder};
            color: ${props => props.theme.customselectHoverColor};
        }
        .custom-select:focus{
            box-shadow: ${props => props.theme.customselectFocusShadow};
        }
        select option{
            border-color: ${props => props.theme.customselectOptionBorder};
            color: ${props => props.theme.customselectOptionColor};
            background-color: ${props => props.theme.customselectOptionBg};
        }
        .auth-form .card-body{
            box-shadow: ${props => props.theme.authformCardbodyShadow};
        }
        .auth-form__title{
            color: ${props => props.theme.authformTitleColor};
        }
        .box-home.card-uniswap .box-home-header{
            border-color: ${props => props.theme.boxHomeHeaderPinkBorder};
        }
        .box-home .box-home-header{
            background-color: ${props => props.theme.boxHomeHeaderBg};
            border-color: ${props => props.theme.boxHomeHeaderBorder};
        }
        .box-home-header img{
            background-color: ${props => props.theme.boxHomeHeaderImgBg};
            border-color: ${props => props.theme.boxHomeHeaderImgBorder};
            box-shadow: ${props => props.theme.boxHomeHeadeBoxImgShadow};
        }
        .card-uniswap .box-home-header img{
            border-color: ${props => props.theme.boxHomeHeaderUniswapImgBorder};
        }
        .card-idex .box-home-header img{
            border-color: ${props => props.theme.boxHomeHeaderIdexImgBorder};
        }
        .card-sushi .box-home-header img{
            border-color: ${props => props.theme.boxHomeHeaderSushiImgBorder};
        }
        .card-mooniswap .box-home-header img{
            border-color: ${props => props.theme.boxHomeHeaderMooniswapImgBorder};
        }
        .card-kucoin .box-home-header img{
            border-color: ${props => props.theme.boxHomeHeaderKucoinImgBorder};
        }
        .box-home-header h4{
            color: ${props => props.theme.boxHomeHeaderColor};
        }
        .box-home-body{
            background-color: ${props => props.theme.boxHomeBodyBg};
        }
        .box-home-body .input-container input{
            color: ${props => props.theme.inputContainerInputColor};
            background-color: ${props => props.theme.inputContainerInputBg};
            transition: ${props => props.theme.inputContainerInputBoxShadow};
            border-color: ${props => props.theme.inputContainerInputBorder};
        }
        .button-help{
            background-color: ${props => props.theme.buttonHelpBg};
            border-color: ${props => props.theme.buttonHelpBorder};
        }
        .box-home-body-fit-height h6{
            border-color: ${props => props.theme.boxHomeBodyFitHeightH6Border};
            color: ${props => props.theme.boxHomeBodyFitHeightH6Color};
        }
        .main-dextboard-container{
            background: ${props => props.theme.mainDextboardContainerBg} no-repeat;
        }
        .card-uniswap h4{
            color: ${props => props.theme.cardUniswapColor};
        }
        .card-idex h4{
            color: ${props => props.theme.cardIdexColor};
        }
        .card-sushi h4{
            color: ${props => props.theme.cardSushiColor};
        }
        .card-mooniswap h4{
            color: ${props => props.theme.cardMooniswapColor};
        }
        .card-kucoin h4{
            color: ${props => props.theme.cardKucoinColor};
        }
        .header-hot-pairs{
            background-color: ${props => props.theme.boxHomeHeaderBg};
            border-color: ${props => props.theme.headerHotPairsBorder};
        }
        .header-hot-pairs h4{
            border-color: ${props => props.theme.headerHotPairsBorder};
            color: ${props => props.theme.headerHotPairsColor};
        }
        .header-hot-pairs ul li a{
            color: ${props => props.theme.headerHotPairsColor} !important;
        }
        .list-group-item{
            border-color: ${props => props.theme.listGroupItemBorder};
            background-color: ${props => props.theme.listGroupItemBg};
        }
        .list-group-item input{
            color: ${props => props.theme.listGroupItemInputColor};
            background-color: ${props => props.theme.listGroupItemInputBg};
            border-color: ${props => props.theme.listGroupItemInputBorder};
        }
        .table{
            color: ${props => props.theme.tableColor};
        }
        .table thead th{
            color: ${props => props.theme.tableThColor};
            background-color: ${props => props.theme.tableThBg};
        }
        .table tbody tr:hover{
            background-color: ${props => props.theme.tableHoverBg};
        }
        .table tbody td{
            border-color: ${props => props.theme.tableTdBorder};
        }
        .pager li a{
            color: ${props => props.theme.pagerColor} !important;
        }
        .page-title .img-logo img{
            background-color: ${props => props.theme.imgLogoBg};
        }
        .dext-score{
            border-color: ${props => props.theme.dextScoreBorder};
            background-color: ${props => props.theme.dextScoreBg};
        }
        .card-header .btn-white{
            color: ${props => props.theme.cardHeaderBtnWhiteColor};
            background-color: ${props => props.theme.cardHeaderBtnWhiteBg};
            border-color: ${props => props.theme.cardHeaderBtnWhiteBorder};
        }
        .card-header h6{
            color: ${props => props.theme.cardHeaderH6Color};
        }
        .no-card-txt-content h2{
            color: ${props => props.theme.noCardTxtContentColor};
        }
        .no-card-txt-content h3{
            color: ${props => props.theme.noCardTxtContentColor};
        }
        .autocomplete-container input{
            color: ${props => props.theme.autocompleteContainerColor};
            background-color: ${props => props.theme.autocompleteContainerBg};
            border-color: ${props => props.theme.autocompleteContainerBorder};
        }
        footer.bg-white{
            background-color: ${props => props.theme.footerBg} !important;
            border-top-color: ${props => props.theme.footerBorder} !important;
        }
        .tooltip-inner{
            background-color: ${props => props.theme.tooltipInnerBg};
            border-color: ${props => props.theme.tooltipInnerBorder};
            color: ${props => props.theme.tooltipInnerColor};
        }
        .bs-tooltip-top .arrow::before{
            border-top-color: ${props => props.theme.tooltipBorder} !important;
        }
        .bs-tooltip-left .arrow::before{
            border-left-color: ${props => props.theme.tooltipBorder} !important;
        }
        .bs-tooltip-right .arrow::before{
            border-right-color: ${props => props.theme.tooltipBorder} !important;
        }
        .MuiDialog-paper{ 
            background-color: ${props => props.theme.MuiDialogPaperBg} !important;
            color: ${props => props.theme.MuiDialogPaperColor} !important;
        }
        .MuiTypography-colorTextSecondary{
            color: ${props => props.theme.MuiDialogPaperColor} !important;
        }
        .MuiDialogActions-root{
            border-top-color: ${props => props.theme.MuiDialogActionsBorder};
        }
        .MuiDialogTitle-root.share-header{
            border-bottom-color: ${props => props.theme.MuiDialogActionsBorder};
        }
        .MuiDialogContent-root.moreinfo-content ul li{
            color: ${props => props.theme.moreinfoContentColor};
        }
        .wallet-search-container input{
            color: ${props => props.theme.walletsearchContainerInputColor};
            background-color: ${props => props.theme.walletsearchContainerInputBg};
            border-color: ${props => props.theme.walletsearchContainerInputBorder};
        }
        .MuiDialogContent-root.share-content .text-secondary{
            color: ${props => props.theme.moreinfoContentColor} !important;
        }
        ::-webkit-scrollbar-track{
            background-color: ${props => props.theme.scrollbarTrack};
        }
        ::-webkit-scrollbar-thumb{
            background-color: ${props => props.theme.scrollbarThumbBg};
            border-color: ${props => props.theme.scrollbarThumbBorder};
        }




`