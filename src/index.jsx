import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App from './Components/App.jsx';


class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    selamVer = () => {
        alert("Merhabaa")
    }

    render() {
        return(
            <div>
                <App fonksiyon={this.selamVer}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);



