import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App from './Components/App.jsx';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "ali"
        }

    }

    isimDegis = (yenisi) => {
        this.setState( 
            {
                name: yenisi
            }
        )
    }

    render() {
        return(
            <div>
                <App fonksiyon={this.isimDegis}/>
                <p>***{this.state.name}***</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);



