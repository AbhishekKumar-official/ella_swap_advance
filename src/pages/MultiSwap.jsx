import React, { Component } from 'react'
import banner from "../images/banner.png"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import BlockbgLight from "../images/block-bg-light.png"
import BlockbgDark from "../images/block-bg.png"

import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'; 
import logocompressed from "../images/logo-compressed.png";
import "./MultiSwap.scss"
class MultiSwap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotpair:false,
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
     
    render() {
        const {hotpair,top100Films} = this.state;
        return (
            <div className="main-multiswap">
                <div className="banner text-center d-sm-none d-md-none d-lg-block d-none">
                    <a href="javascript:void(0)">
                        <img src={banner} />
                    </a>
                </div>
                <div className="header-hot-pairs" style ={ { backgroundImage: `url(${this.props.theme === "light"? BlockbgLight : BlockbgDark})` } }s>
                        <h4 className="py-1 pl-2 pr-2 m-0 text-center eth-price d-none d-md-inline-block"> ETH: $1153.19 </h4>
                        <h4 className="py-1 pl-2 pr-2 m-0 text-center gas-price d-none d-md-inline-block">
                            <i className="fa fa-dashboard mr-2"></i>126 GWEI 
                        </h4>
                        <h4 className="py-1 px-2 m-0 hot-pairs-title"> HOT PAIRS
                        <i className="fa fa-fire ml-2"></i>
                        <a href="#" className="hots-info fa fa-question-circle ml-2" onClick={()=>{this.setState({hotpair:true})}}></a>
                        </h4>
                        <ul className="p-0 m-0 no-sponsor">
                            <div className="marquee-wrap">
                            <marquee direction="left" behavior="scroll" id="marquee" onmouseover={()=>this.stop()} onmouseout={()=>this.start()}>
                            <li>
                                <a className="ml-3 py-2 hot-pair first" data-hot-pair="POOLZ" data-hot-pair-number="0" href="javascript:void(0)">
                                    <span>#1</span> POOLZ 
                                    <span className="badge badge-success mr-1 align-middle ng-star-inserted"> N </span>
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="YOP" data-hot-pair-number="1" href="javascript:void(0)">
                                    <span>#2</span> YOP 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="PROS" data-hot-pair-number="2" href="javascript:void(0)">
                                    <span>#3</span> PROS 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="COMBO" data-hot-pair-number="3" href="javascript:void(0)">
                                    <span>#4</span> COMBO 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="ROOK" data-hot-pair-number="4" href="javascript:void(0)">
                                    <span>#5</span> ROOK 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="pBTC35A" data-hot-pair-number="5" href="javascript:void(0)">
                                    <span>#6</span> pBTC35A 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="SPI" data-hot-pair-number="6" href="javascript:void(0)">
                                    <span>#7</span> SPI 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="WISE" data-hot-pair-number="7" href="javascript:void(0)">
                                    <span>#8</span> WISE 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="ARCH" data-hot-pair-number="8" href="javascript:void(0)">
                                    <span>#9</span> ARCH 
                                </a>
                            </li>
                            <li>
                                <a className="ml-3 py-2 hot-pair" data-hot-pair="DSD" data-hot-pair-number="9" href="javascript:void(0)">
                                    <span>#10</span> DSD 
                                </a>
                            </li>
                            </marquee>
                            </div>
                        </ul>
                    </div>
                    <div className="main-multiswap-container px-4">
                    <div className="page-header row no-gutters py-4">
                        <div className="col-12 col-md-6 text-left mb-0 pr-4 pb-3">
                            <span className="text-uppercase page-subtitle">V0.1.1 DEXTOOLS MULTISWAP</span>
                            <h3 className="page-title">DEXTools MULTISWAP</h3>
                            <small className="p-0 mt-2 m-0 text-muted">Trade many pairs at once</small>
                        </div>
                    </div>
                    <div class="no-card">
                        <div class="no-card-txt-content">
                            <h2>
                                <i class="fa fa-columns fa-2x"></i>
                            </h2>
                            <h3>Search and add pairs</h3>
                            <p>You can add as many pairs as you want in the same view.</p>
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
                                        
                                            placeholder="Add / search pair..."
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
                            
                            <p class="text-warning mt-4">
                                <i class="fa fa-times-circle mr-2 close-view"></i>In order for it to work properly, please accept the Uniswap conditions each time you add a pair. 
                            </p>
                        </div>
                    </div>
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
                   </div>
        )
    }
}
export default MultiSwap