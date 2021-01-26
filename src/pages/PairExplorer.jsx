import React, { Component } from 'react'
import banner from "../images/banner.png"
import logoBig from "../images/logo-big.png"
import etherscan from "../images/etherscan.png"
import unicrypt from "../images/unicrypt_v3.svg"
import teamBright from "../images/team-bright.png"
import coingecko from "../images/coingecko.png"
import dextWhiteLogo from "../images/dext-white-small.png"
import CandleChart from "../commons/CandleChart"
import BasicBarChart from "../commons/BasicBarChart"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'; 
import InputAdornment from '@material-ui/core/InputAdornment';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BlockbgLight from "../images/block-bg-light.png"
import BlockbgDark from "../images/block-bg.png"

import logocompressed from "../images/logo-compressed.png";
import sync from "../images/sync.png"
import $ from "jquery";
import "./PairExplorer.scss"
class PairExplorer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            setNone:false,
            hotpair:false,
            buttonhelp:false,
            share:false,
            moreinfo:false,
            communitytrust:false,
            tokennews:false,
            savedwallets:false,
            top100Films : [
                { title: 'The Shawshank Redemption', year: 1994 },
                { title: 'The Godfather', year: 1972 },
                { title: 'The Godfather: Part II', year: 1974 },
                { title: 'The Dark Knight', year: 2008 },
                { title: '12 Angry Men', year: 1957 },
                { title: "Schindler's List", year: 1993 },
                { title: 'Pulp Fiction', year: 1994 },
                { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
                { title: 'The Good, the Bad and the Ugly', year: 1966 },
                { title: 'Fight Club', year: 1999 },
                { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
                { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
                { title: 'Forrest Gump', year: 1994 },
                { title: 'Inception', year: 2010 },
                { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
                { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
                { title: 'Goodfellas', year: 1990 },
                { title: 'The Matrix', year: 1999 },
                { title: 'Seven Samurai', year: 1954 },
                { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
                { title: 'City of God', year: 2002 },
                { title: 'Se7en', year: 1995 },
                { title: 'The Silence of the Lambs', year: 1991 },
                { title: "It's a Wonderful Life", year: 1946 },
                { title: 'Life Is Beautiful', year: 1997 },
                { title: 'The Usual Suspects', year: 1995 },
                { title: 'Léon: The Professional', year: 1994 },
                { title: 'Spirited Away', year: 2001 },
                { title: 'Saving Private Ryan', year: 1998 },
                { title: 'Once Upon a Time in the West', year: 1968 },
                { title: 'American History X', year: 1998 },
                { title: 'Interstellar', year: 2014 },
                { title: 'Casablanca', year: 1942 },
                { title: 'City Lights', year: 1931 },
                { title: 'Psycho', year: 1960 },
                { title: 'The Green Mile', year: 1999 },
                { title: 'The Intouchables', year: 2011 },
                { title: 'Modern Times', year: 1936 },
                { title: 'Raiders of the Lost Ark', year: 1981 },
                { title: 'Rear Window', year: 1954 },
                { title: 'The Pianist', year: 2002 },
                { title: 'The Departed', year: 2006 },
                { title: 'Terminator 2: Judgment Day', year: 1991 },
                { title: 'Back to the Future', year: 1985 },
                { title: 'Whiplash', year: 2014 },
                { title: 'Gladiator', year: 2000 },
                { title: 'Memento', year: 2000 },
                { title: 'The Prestige', year: 2006 },
                { title: 'The Lion King', year: 1994 },
                { title: 'Apocalypse Now', year: 1979 },
                { title: 'Alien', year: 1979 },
                { title: 'Sunset Boulevard', year: 1950 },
                { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
                { title: 'The Great Dictator', year: 1940 },
                { title: 'Cinema Paradiso', year: 1988 },
                { title: 'The Lives of Others', year: 2006 },
                { title: 'Grave of the Fireflies', year: 1988 },
                { title: 'Paths of Glory', year: 1957 },
                { title: 'Django Unchained', year: 2012 },
                { title: 'The Shining', year: 1980 },
                { title: 'WALL·E', year: 2008 },
                { title: 'American Beauty', year: 1999 },
                { title: 'The Dark Knight Rises', year: 2012 },
                { title: 'Princess Mononoke', year: 1997 },
                { title: 'Aliens', year: 1986 },
                { title: 'Oldboy', year: 2003 },
                { title: 'Once Upon a Time in America', year: 1984 },
                { title: 'Witness for the Prosecution', year: 1957 },
                { title: 'Das Boot', year: 1981 },
                { title: 'Citizen Kane', year: 1941 },
                { title: 'North by Northwest', year: 1959 },
                { title: 'Vertigo', year: 1958 },
                { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
                { title: 'Reservoir Dogs', year: 1992 },
                { title: 'Braveheart', year: 1995 },
                { title: 'M', year: 1931 },
                { title: 'Requiem for a Dream', year: 2000 },
                { title: 'Amélie', year: 2001 },
                { title: 'A Clockwork Orange', year: 1971 },
                { title: 'Like Stars on Earth', year: 2007 },
                { title: 'Taxi Driver', year: 1976 },
                { title: 'Lawrence of Arabia', year: 1962 },
                { title: 'Double Indemnity', year: 1944 },
                { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
                { title: 'Amadeus', year: 1984 },
                { title: 'To Kill a Mockingbird', year: 1962 },
                { title: 'Toy Story 3', year: 2010 },
                { title: 'Logan', year: 2017 },
                { title: 'Full Metal Jacket', year: 1987 },
                { title: 'Dangal', year: 2016 },
                { title: 'The Sting', year: 1973 },
                { title: '2001: A Space Odyssey', year: 1968 },
                { title: "Singin' in the Rain", year: 1952 },
                { title: 'Toy Story', year: 1995 },
                { title: 'Bicycle Thieves', year: 1948 },
                { title: 'The Kid', year: 1921 },
                { title: 'Inglourious Basterds', year: 2009 },
                { title: 'Snatch', year: 2000 },
                { title: '3 Idiots', year: 2009 },
                { title: 'Monty Python and the Holy Grail', year: 1975 },
              ]
        }
    }

    handleCloseHotPair = () => {
        this.setState({
            hotpair: false
        })
    }
    handleCloseButtonHelp = () => {
        this.setState({
            buttonhelp: false
        })
    }
    handleCloseShare = () => {
        this.setState({
            share: false
        })
    }
    handleCloseMoreInfo = () => {
        this.setState({
            moreinfo: false
        })
    }
    handleCloseCommunityTrust = () => {
        this.setState({
            communitytrust: false
        })
    }
    handleCloseTokenNews = () => {
        this.setState({
            tokennews: false
        })
    }
    handleCloseSavedWallets = () => {
        this.setState({
            savedwallets: false
        })
    }

    toggleDiv = () =>{
        this.setState({
            setNone : !this.state.setNone
        })
        
    }
    componentDidMount() {
        $("#marquee").mouseenter(function(){
            document.getElementById("marquee").stop();
          });
          $("#marquee").mouseleave(function(){
            document.getElementById("marquee").start();
          });

          $('[data-toggle="tooltip"]').tooltip();
          $('#pair-table').dataTable();
    }
    
    
    render() {
        const {setNone,hotpair,buttonhelp,share,moreinfo,communitytrust,tokennews,savedwallets,top100Films} = this.state;
        return (
            <div className="main-pairexplorer">
                <div className="banner text-center d-sm-none d-md-none d-lg-block d-none">
                    <a href="javascript:void(0)">
                        <img src={banner} />
                    </a>
                </div>
                <div class="header-hot-pairs" style ={ { backgroundImage: `url(${this.props.theme === "light"? BlockbgLight : BlockbgDark})` } }
                >
                        <h4 class="py-1 pl-2 pr-2 m-0 text-center eth-price d-none d-md-inline-block"> ETH: $1153.19 </h4>
                        <h4 class="py-1 pl-2 pr-2 m-0 text-center gas-price d-none d-md-inline-block">
                            <i class="fa fa-dashboard mr-2"></i>126 GWEI 
                        </h4>
                        <h4 class="py-1 px-2 m-0 hot-pairs-title"> HOT PAIRS
                        <i class="fa fa-fire ml-2"></i>
                        <a href="javascript:void(0)" class="hots-info fa fa-question-circle ml-2" onClick={()=>{this.setState({hotpair:true})}}></a>
                        </h4>
                        <ul class="p-0 m-0 no-sponsor">
                            <div className="marquee-wrap">
                            <marquee direction="left" behavior="scroll" id="marquee" onmouseover={()=>this.stop()} onmouseout={()=>this.start()}>
                            <li>
                                <a class="ml-3 py-2 hot-pair first" data-hot-pair="POOLZ" data-hot-pair-number="0" href="javascript:void(0)">
                                    <span>#1</span> YOP  
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="YOP" data-hot-pair-number="1" href="javascript:void(0)">
                                    <span>#2</span>  POOLZ
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="PROS" data-hot-pair-number="2" href="javascript:void(0)">
                                    <span>#3</span> PROS 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="COMBO" data-hot-pair-number="3" href="javascript:void(0)">
                                    <span>#4</span> COMBO 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="ROOK" data-hot-pair-number="4" href="javascript:void(0)">
                                    <span>#5</span> ROOK 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="pBTC35A" data-hot-pair-number="5" href="javascript:void(0)">
                                    <span>#6</span> pBTC35A 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="SPI" data-hot-pair-number="6" href="javascript:void(0)">
                                    <span>#7</span> SPI 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="WISE" data-hot-pair-number="7" href="javascript:void(0)">
                                    <span>#8</span> WISE 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="ARCH" data-hot-pair-number="8" href="javascript:void(0)">
                                    <span>#9</span> ARCH 
                                </a>
                            </li>
                            <li>
                                <a class="ml-3 py-2 hot-pair" data-hot-pair="DSD" data-hot-pair-number="9" href="javascript:void(0)">
                                    <span>#10</span> DSD 
                                </a>
                            </li>
                            </marquee>
                            </div>
                        </ul>
                    </div>
                    <div className="main-pairexplorer-container px-4">
                    <div className="page-header row no-gutters py-4">
                        <div class="col-12 col-md-8 text-left mb-0 pr-4 pb-3">
                            <span class="text-uppercase page-subtitle">v0.3.0 UNISWAP PAIR EXPLORER</span>
                            <h3 class="page-title mt-1">
                                <span class="d-none d-lg-inline-block img-logo">
                                    <img src={logoBig} width="50" class="mt-2" />
                                </span>
                                <div className="erc-wallet-wrap">
                                    <span class="erc-wallet mr-3">
                                        <span class="d-inline-block align-middle mr-1">ETH /</span>
                                        <strong class="d-inline-block align-middle">DEXT</strong>
                                    </span>
                                    <div class="mt-2 d-inline-block align-bottom">
                                        <a target="blank" href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="View Contract">
                                        <img src={etherscan} />
                                        </a>
                                        <a target="blank" href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Blocked Liquid">
                                        <img src={unicrypt} class="ml-2" />
                                        </a>
                                        <a target="blank" href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Team Lock">
                                        <img src={teamBright} class="ml-2 team-lock-icon" />
                                        </a>
                                        <a target="blank" href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="See in Coingecko">
                                        <img src={coingecko} class="ml-2" />
                                        </a>
                                        <a target="blank" href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Email: info@dextools.io">
                                            <i class="fa fa-envelope text-light ml-2"></i>
                                        </a>
                                        <a target="blank" href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Telegram">
                                            <i class="fa fa-telegram text-light ml-2"></i>
                                        </a>
                                        <a target="blank" href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Twitter">
                                            <i class="fa fa-twitter text-light ml-2"></i>
                                        </a>
                                        <a target="blank" href="javascript:void(0)" ref = "dataTip" data-toggle="tooltip" data-placement="left" title="Web">
                                            <i class="fa fa-desktop text-light ml-2"></i>
                                        </a>
                                    </div>
                                    <div class="page-title-more-data">
                                        <div class="mr-2 d-inline-block">(DEXTools)</div>
                                        <div class="d-inline-block mt-2">
                                            <small class="p-0 m-0 text-muted">Token contract: 
                                            <span class="mr-1">...32478a9fe55197166</span>
                                            <a href="javascript:;" ref = "dataTip" data-toggle="tooltip" data-placement="top" title="Copy to clipboard" class="fa fa-copy text-muted text-decoration-none d-inline-block"></a>
                                            </small>
                                            <small class="p-0 ml-2 m-0 text-muted">
                                                <span class="mr-1">- Pair</span>
                                                <a href="javascript:;" ref = "dataTip" data-toggle="tooltip" data-placement="top" title="Copy to clipboard" class="fa fa-copy text-muted text-decoration-none d-inline-block"></a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </h3>
                        </div>
                        <div class="col-md-4 text-left mb-0">
                            <div class="card card-small">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item px-3">
                                        <div class="form-row mt-3">
                                            <div class="form-group col-12">
                                                <div class="autocomplete-class">
                                <div class="autocomplete-container">
                                    <div class="input-container">
                                    <Autocomplete
                                                freeSolo
                                                id="free-solo-2-demo"
                                                disableClearable
                                                options={top100Films.map((option) => option.title)}
                                                renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    // label="Add / search pair..."
                                                    placeholder="Search pair by symbol / name / pair contract / token contract"
                                                  
                                                    margin="normal"
                                                    variant="outlined"
                                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                                />
                                                )}
                                            />
                                    </div>
                                </div>
                                <i class="fa fa-search fa-2x mr-2"></i>
                            </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div class={`col-12 col-md-4 col-xl-2 ${setNone === true ? "d-xl-none": null }`}>
                            <div class="card card-small">
                                <div class="card-header border-bottom position-relative favorites-header">
                                    <a href="javascript:void(0)" class="button-help" onClick={()=>{this.setState({buttonhelp:true})}}>?</a>
                                    <h6 class="m-0 mr-4">Favorites 
                                    <a href="javascript:void(0)" class="d-xl-none">
                                        <i class="fa mx-3 float-right fa-eye-slash"></i>
                                    </a>
                                </h6>
                            </div>
                            <div class="card-body p-0 pb-3">
                                <ul class="favorite-pairs p-0 m-0"></ul>
                                <div class="alert mb-0">
                                    <i class="fa fa-info mx-2"></i>No pairs saved 
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 d-none d-md-block banner-dext">
                            <a target="_blank" class="mini-banner" href="javascript:void(0)">
                                <div class="info">
                                    <div class="title">
                                        <span class="project">
                                        <img src={dextWhiteLogo} width="17" class="logo" alt="Dext" />
                                            <span class="name">DEXT</span>
                                        </span>
                                        <span class="extra">FORCE</span>
                                        <div class="sub">VENTURES</div>
                                    </div>
                                    <div class="description">invest early stage projects</div>
                                </div>
                                <div class="action text-white">
                                    <div class="text">GO!</div>
                                    <i class="fa fa-arrow-right icon"></i>
                                    <i class="fa fa-arrow-right icon icon-extra"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                        <div class="col-12 col-md-8 col-xl-3 text-center text-sm-left mt-3 mt-md-0 pair-container">
                            <ul class="token-info-list pb-3">
                                <li class="text-right pair-name mt-2 mb-4">
                                    <button type="button" class={`btn btn-icon-absolute float-left d-none d-xl-block ${setNone ? "btn-success":" btn-collapse-col btn-secondary rounded-right"}`} onClick={()=>this.toggleDiv()}>
                                        <i class={`fa ${setNone ? "fa-sign-out":"fa-rotate-180 fa-sign-in"}`}></i>
                                    </button>
                                    <button type="button" class="btn btn-info btn-icon-absolute ml-2" onClick={()=>{this.setState({share:true})}}>
                                        <i class="fa fa-share-alt"></i>
                                    </button>
                                    <button type="button" class="btn btn-success btn-icon-absolute ml-2">
                                        <i class="fa fa-star-o"></i>
                                    </button>
                                    <a target="_blank" class="btn btn-salmon btn-icon-absolute ml-2 trade-uniswap" href="javascript:void(0)" data-uniswap-trade="DEXT">Trade </a>
                                </li>
                                <li class="pair-price text-right text-danger">
                                    <i class="fa icon-arrow-price mr-1 fa-arrow-circle-down text-danger"></i> $0.10831127
                                </li>
                                <li class="text-right mb-4">
                                    <span class="text-success">(24h : 12.19%)</span> 0.00008943 ETH 
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Total liquidity:</span>
                                    <span class="data-volume-right pl-1">$1,312,712.69</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Daily volume:</span>
                                    <span class="data-volume-right pl-1">$214,607.14</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Pooled ETH:</span>
                                    <span class="data-volume-right pl-1">541.96</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Pooled DEXT:</span>
                                    <span class="data-volume-right pl-1">6,046,728.30</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Total tx: </span>
                                    <span class="data-volume-right pl-1">59433</span>
                                </li>
                                <li class="my-1 data-volume">
                                    <span class="text-right">Holders:</span>
                                    <span class="data-volume-right pl-1">4277</span>
                                </li>
                                <li class="my-1 data-volume text-info data-volume-link">
                                    <span class="data-volume-right cursor-pointer" onClick={()=>{this.setState({moreinfo:true})}}>
                                        <i class="fa fa-info-circle icon-arrow-price text-info mr-2"></i>View more info 
                                    </span>
                                </li>
                            </ul>
                            <div>
                                <div class="dext-score" style ={ { backgroundImage: `url(${this.props.theme === "light"? BlockbgLight : BlockbgDark})` } }>
                                    <div class="dext-score-title">DEXT Score</div>
                                    <div class="dext-score-chart">
                                        <BasicBarChart />
                                        <div class="dext-score-value text-success">99</div>
                                    </div>
                                </div>
                                <div class="vote-score p-4">
                                    <div class="vote-score-title text-center">
                                        <a href="javascript:void(0)" class="fa fa-info-circle icon-arrow-price text-info mr-1 action" onClick={()=>{this.setState({communitytrust:true})}}></a> Community trust  (330 votes) 
                                    </div>
                                    <div class="progress-hand text-center">
                                        <i placement="top" class="fa fa-thumbs-o-up"></i>
                                        <span class="text-success"> 99.4% </span>
                                    </div>
                                    <div class="progress progress-sm">
                                        <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>
                                    </div>
                                    <div class="progress-hand text-center">
                                        <i placement="top" class="fa fa-thumbs-o-down"></i>
                                        <span> 0.6% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 ${setNone ? "col-xl-9" : "col-xl-7"}`}>
                            <div className="tradingview">
                            <div className="candle_stick_chart">
                                <CandleChart />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className={`col-12 mb-4 order-xl-1 col-xl-2 ${setNone ? "d-xl-none": null}`}>
                            <div class="box-home">
                                <div class="box-home-header px-3 py-3 m-0 text-right" style ={ { backgroundImage: `url(${this.props.theme === "light"? BlockbgLight : BlockbgDark})` } }>
                                    <a href="javascript:void(0)" class="button-help" onClick={()=>{this.setState({tokennews:true})}}>?</a>
                                    <h4 class="m-0">TOKEN 
                                    <span>NEWS</span>
                                    </h4>
                                </div>
                                <div class="box-home-body news px-3 py-1 m-0">
                                    <div>
                                        <div class="news py-3">
                                            <div class="data">
                                                <span class="info">
                                                    <span class="created text-secondary">2021-01-10, 06:27</span>
                                                </span>
                                                <h3 class="title mt-2 mb-1 mb-2"> DEXTForce Ventures Release </h3>
                                                <p class="p-0 m-0 description"> Empowering the DEXTools community with opportunities to consider early stage investments. 
                                                <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link-token="DEXT" data-news-link="javascript:void(0)">
                                                    <i class="fa ml-2 fa-external-link"></i>
                                                </a>
                                                </p>
                                                <span class="votes d-block text-right mt-2">
                                                    <span data-toggle="tooltip" data-placement="top" title="Only subscribed users can upvote news!">
                                                        <i class="fa mr-1 fa-thumbs-o-up"></i>25 
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="news py-3">
                                            <div class="data">
                                                <span class="info">
                                                    <span class="created text-secondary">2021-01-07, 15:38</span>
                                                </span>
                                                <h3 class="title mt-2 mb-1 mb-2"> DEXTools Version 1.6 Released </h3>
                                                <p class="p-0 m-0 description"> -Telegram & Email Alerts for Standard/Premium Tiers.<br/>
                                                    -Hot News at DEXTboard.<br/>
                                                    -DEXTshare info at the top. <br/>
                                                    -Several fixes.<br/><br/>

                                                    Thanks for your support and Good Trading.  
                                                <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link-token="DEXT" data-news-link="javascript:void(0)">
                                                    <i class="fa ml-2 fa-external-link"></i>
                                                </a>
                                                </p>
                                                <span class="votes d-block text-right mt-2">
                                                    <span data-toggle="tooltip" data-placement="top" title="Only subscribed users can upvote news!">
                                                        <i class="fa mr-1 fa-thumbs-o-up"></i>31
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="news py-3">
                                            <div class="data">
                                                <span class="info">
                                                    <span class="created text-secondary">2021-01-02, 03:10</span>
                                                </span>
                                                <h3 class="title mt-2 mb-1 mb-2"> DEXTShare December Released </h3>
                                                <p class="p-0 m-0 description">  We are proud to share with you our success once again thanks to our monthly promotional airdrop, the DEXTShare.   
                                                <a target="_blank" class="news-link" href="javascript:void(0)" data-news-link-token="DEXT" data-news-link="javascript:void(0)">
                                                    <i class="fa ml-2 fa-external-link"></i>
                                                </a>
                                                </p>
                                                <span class="votes d-block text-right mt-2">
                                                    <span data-toggle="tooltip" data-placement="top" title="Only subscribed users can upvote news!">
                                                        <i class="fa mr-1 fa-thumbs-o-up"></i>32
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                <div class="loading" hidden="">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className={`col-12 order-xl-2  ${setNone ? "col-xl-12":"col-xl-10"}`}>
                            <div className="card card-small mb-4">
                            <div class="card-header border-bottom d-flex justify-content-between align-items-center card-with-tabs text-center text-sm-left">
                                <div>
                                    <div role="group" aria-label="Page actions" class="tabs btn-group btn-group-toggle d-inline-flex mb-0 p-0 mb-2 mb-sm-0">
                                        <a href="javascript:void(0)" class="btn btn-white active">Trade History</a>
                                        <span data-toggle="tooltip" data-placement="top" title="Only subscribed users can add positions" class="btn btn-white disabled"> My positions </span>
                                        <span data-toggle="tooltip" data-placement="top" title="Add pair to favourites first" class="btn btn-white"> Price Alerts </span>
                                    </div>
                                    <h6 class="m-0 d-inline-block align-middle mx-3"> DEXT (last 309 trades) 
                                    <a class="d-inline-block wallet-filter-modal cursor-pointer" data-toggle="tooltip" data-placement="left" title="Show saved wallets to filter" onClick={()=>{this.setState({savedwallets:true})}}>
                                        <i class="fa fa-filter ml-2 row-icon"></i>
                                    </a>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-body p-0">
                            <div className="table-responsive">
                                    <table className="table" id="pair-table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Date</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Price USD</th>
                                            <th scope="col">Price ETH</th>
                                            <th scope="col">Amount DEXT</th>
                                            <th scope="col">Total ETH</th>
                                            <th scope="col">Maker</th>
                                            <th scope="col">Others</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-danger">sell</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429
                                            <i class="fa fa-user-secret icon-table ml-1 text-danger" data-toggle="tooltip" data-placement="left" title="Drained: 0.03949052ETH"></i>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td>2021-01-16 04:04:27</td>
                                            <td className="text-success">buy</td>
                                            <td>$0.10379018</td>
                                            <td>0.00008529</td>
                                            <td>400.00</td>
                                            <td>0.03411429</td>
                                            <td>
                                            <a href="javascript:void(0)"> ...0b83b2358485 </a>
                                            </td>
                                            <td>
                                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="left" title="View TX">
                                                <img src={etherscan} className="icon-bg-white-rounded" />
                                            </a>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="datatable-footer">
                                    <div className="datatable-footer-inner">
                                        <div className="page-count"> 397 total </div>
                                        <div className="datatable-pager">
                                            <ul className="pager">
                                                <li className="backward">
                                                    <a role="button" aria-label="go to first page" href="javascript:void(0)">
                                                        <i className="fa fa-step-backward"></i>
                                                    </a>
                                                </li>
                                                <li className="chevron-left">
                                                    <a role="button" aria-label="go to previous page" href="javascript:void(0)">
                                                        <i className="fa fa-chevron-left"></i>
                                                    </a>
                                                </li>
                                                <li role="button" className="pages" aria-label="page 1">
                                                    <a href="javascript:void(0)"> 1 </a>
                                                </li>
                                                <li role="button" className="pages" aria-label="page 2">
                                                    <a href="javascript:void(0)"> 2 </a>
                                                </li>
                                                <li role="button" className="pages" aria-label="page 3">
                                                    <a href="javascript:void(0)"> 3 </a>
                                                </li>
                                                <li role="button" className="pages" aria-label="page 4">
                                                    <a href="javascript:void(0)"> 4 </a>
                                                </li>
                                                <li role="button" className="pages active" aria-label="page 5">
                                                    <a href="javascript:void(0)"> 5 </a>
                                                </li>
                                                <li className="disabled chevron-right">
                                                    <a role="button" aria-label="go to next page" href="javascript:void(0)">
                                                        <i className="fa fa-chevron-right"></i>
                                                    </a>
                                                </li>
                                                <li className="disabled forward">
                                                    <a role="button" aria-label="go to last page" href="javascript:void(0)">
                                                        <i className="fa fa-step-forward"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
            <div>
            </div>
            <Dialog
            open={hotpair}
            onClose={this.handleCloseHotPair}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
                <img src={logocompressed} alt=""/>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" className="mb-0">
              These pairs are the most viewed by DEXT users in real time, they are shown with a 1 minute delay for free users. These pairs are decided by the community visits and do not represent any investment advice or endorsement from the DEXTools team.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseHotPair} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={buttonhelp}
            onClose={this.handleCloseButtonHelp}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
                <img src={logocompressed} alt=""/>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" className="mb-0">
              Premium & Standard members unlimited number of saved pairs.
Free members maximum 4 saved pairs.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseButtonHelp} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={share}
            onClose={this.handleCloseShare}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" className="share-header">
            Share on Social Media
            </DialogTitle>
            <DialogContent className="share-content">
            <div class="share-btn">
                <a class="btn-twitter btn-outline-info p-2 m-2">
                    <i class="fa fa-2x fa-twitter pr-2"></i>Twitter
                </a>
                <a class="btn-telegram btn-outline-info p-2 m-2">
                    <i class="fa fa-2x fa-telegram pr-2"></i>Telegram 
                </a>
                <a class="btn-reddit btn-outline-salmon p-2 m-2">
                    <i class="fa fa-2x fa-reddit pr-2"></i>Reddit 
                </a>
            </div>
            </DialogContent>
            <DialogActions className="justify-content-center">
              <Button onClick={this.handleCloseShare} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={moreinfo}
            onClose={this.handleCloseMoreInfo}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title"></DialogTitle>
            <DialogContent className="moreinfo-content">
              <DialogContentText id="alert-dialog-description" className="mb-0">
              <ul class="m-0 text-left pl-0 pb-2 h6">
                  <li class="d-flex">
                      <span>Market Cap: </span>
                      <span class="ml-auto">$10,102,797.69</span>
                    </li>
                    <li class="d-flex">
                        <span>Circ. Supply: </span>
                        <span class="ml-auto">94,130,955.679 DEXT</span>
                    </li>
                </ul>
                <ul class="m-0 text-left pl-0">
                    <li class="d-flex">
                        <span>1 ETH: </span>
                        <span class="ml-auto">11341.52 DEXT</span>
                    </li>
                    <li class="d-flex">
                        <span>Pool created: </span>
                        <span class="ml-auto">6/19/2020 06:24</span>
                    </li>
                    <li class="d-flex">
                        <span>Fully diluted Market Cap: </span>
                        <span class="ml-auto">$15,935,754.09</span>
                    </li>
                    <li class="d-flex">
                        <span>Total Supply: </span>
                        <span class="ml-auto">149,804,070 DEXT</span>
                    </li>
                    <li class="d-flex">
                        <span>Pooled DEXT: </span>
                        <span class="ml-auto">4.22%</span>
                    </li>
                </ul>
                <div class="MuiDialogActions-root d-flex justify-content-between">
                    <ul class="m-0 text-left pl-0 h6">
                        <a tabindex="-1" href="javascript:void(0)">
                            <img src={sync} height="16px" />
                            Liquidity Bonded 
                        </a>
                    </ul>
                    <span>$17,442.00</span>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseMoreInfo} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={communitytrust}
            onClose={this.handleCloseCommunityTrust}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
                <img src={logocompressed} alt=""/>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" className="mb-0">
              This bar represents the trust of DEXT community in this pair. You have 1 vote per pair but you can change it.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseCommunityTrust} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={tokennews}
            onClose={this.handleCloseTokenNews}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
                <img src={logocompressed} alt=""/>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" className="mb-0">
              If you want your news to appear in this section, please contact us 
              <span class="d-inline-block">
                  <a href="javascript:void(0)" class="ml-2 mr-2">@</a>
                  <a href="javascript:void(0)">
                      <i class="fa fa-twitter mr-2"></i>
                    </a>
                    <a href="javascript:void(0)">
                        <i class="fa fa-telegram mr-2"></i>
                    </a>
                </span><br/>
                - The cost is 1000 dext per news item.<br/>
                - Service intended for teams. 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseTokenNews} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={savedwallets}
            onClose={this.handleCloseSavedWallets}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" className="share-header">
            Saved wallets that appear in the history
            </DialogTitle>
            <DialogContent className="share-content flex-column">
            <div class="wallet-search-container mb-4">
                <i class="fa fa-search"></i>
                <input  type="search" class="wallet-search" placeholder="Search for name or at least 10 characters of a wallet Id..." />
            </div>
            <div class="p-0 py-2 text-secondary"> No results or empty </div>
            </DialogContent>
            <DialogActions className="justify-content-center">
              <Button onClick={this.handleCloseSavedWallets} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        )
    }
}
export default PairExplorer