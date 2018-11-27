
import React from 'react';

export class SideBarComponent extends React.PureComponent {


    populatePlatform = () => {

        const data = this.props.pSort.platformSort;
        let keys = Object.keys(data)
        let labels = [];

        for(let i = 0 ; i < keys.length ; i ++){
            labels.push(<li><button onClick={() => this.clickFunction(data[keys[i]])} >{keys[i]} ({data[keys[i]].length})</button></li>);
        }

        return labels;
    }

    clickFunction = (data) => {
        this.props.modifyState(data);
    }

    render() {
        
        
        return (
            <>
                <div class="sidebar-header">
                    <h3>Narrow Results</h3>
                </div>

                <ul id = "platformUl" class="list-unstyled components">
                    <p>Platform</p>
                    {this.populatePlatform()}
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>




            </>
        );
    }

}