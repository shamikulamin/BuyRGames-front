
import React from 'react';
import style from '../SideBar.Component/style.css'

export class SideBarComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            platform: "",
            platformMap: {
                "TG16": "TurboGrafx-16",
                "PSP": "Sony Playstation Portable",
                "2600": "Atari 2600",
                "PS4": "Sony Playstation 4",
                "N64": "Nintendo 64",
                "GBA": "Gameboy Advanced",
                "GG": "Game Gear",
                "PSV": "Sony Playstation Vita",
                "XB": "Microsoft Xbox",
                "DC": "Sega Dreamcast",
                "XOne": "Microsoft Xbox One",
                "PS2": "Sony Playstation 2",
                "Wii": "Nintendo Wii",
                "X360": "Microsoft Xbox 360",
                "WiiU": "Nintendo Wii U",
                "PC": "PC",
                "DS": "Nintendo DS",
                "WS": "WonderSwan",
                "2007": "Mega Touch Force 2007",
                "PS3": "Sony Playstation 3",
                "GEN": "Sega Genesis",
                "SNES": "Super Nintendo",
                "NG": "Neo Geo",
                "GB": "Gameboy",
                "PS": "Sony Playstation",
                "SCD": "Sega Mega-CD",
                "3DS": "Nintendo 3DS",
                "3DO": "3DO Interactive Multiplayer",
                "NES": "Nintendo Entertainment System",
                "SAT": "Sega Saturn",
                "GC": "Nintendo GameCude"
            },


        };

    }


    populatePlatform = () => {

        const data = this.props.pSort.platformSort;
        let keys = Object.keys(data)
        let labels = [];

        for (let i = 0; i < keys.length; i++) {
            labels.push(<li><button className='button-invis' onClick={() => this.clickFunction(data[keys[i]])} > {this.state.platformMap[keys[i]]} ({data[keys[i]].length})</button></li>);
        }

        return labels;
    }

    populateGenre = () => {

        const data = this.props.pSort.genreSort;
        let keys = Object.keys(data)
        let labels = [];

        for (let i = 0; i < keys.length; i++) {
            labels.push(<li><button className='button-invis' onClick={() => this.clickFunction(data[keys[i]])} >{keys[i]} ({data[keys[i]].length})</button></li>);
        }

        return labels;
    }

    populatePrice = () => {

        const data = this.props.pSort.priceSort;
        let keys = Object.keys(data)
        let labels = [];

        for (let i = 0; i < keys.length; i++) {
            labels.push(<li><button className='button-invis' onClick={() => this.clickFunction(data[keys[i]])} >{keys[i]} ({data[keys[i]].length})</button></li>);
        }

        return labels;
    }

    clickFunction = (data) => {
        let x = document.getElementById("filterBtn");
        x.style.display = "block";
        this.props.modifyState(data);

    }

    viewAll = () => {
        console.log("here")
        let x = document.getElementById("filterBtn");
        x.style.display = "none";
        this.props.removeFilters();
    }

    render() {


        return (
            <>
                <div class="sidebar-header">
                    <h3>Narrow Results</h3>
                    <button id='filterBtn' className="btn" onClick={()=> this.viewAll()}><i className="fa fa-close" ></i> Remove Filters</button>
                </div>

                <ul id="platformUl" class="list-unstyled components">
                    <p className = 'border-top border-bottom outset'>Platform</p>
                    {this.populatePlatform()}
                    <p className = 'border-top border-bottom outset'>Genre</p>
                    {this.populateGenre()}
                    <p className = 'border-top border-bottom outset'>Price Range</p>
                    {this.populatePrice()}
                </ul>




            </>
        );
    }

}