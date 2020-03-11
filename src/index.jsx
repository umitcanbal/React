import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App from './Components/App.jsx';
import App2 from './Components/App2.jsx';

class Main extends React.Component {
    render() {
        let myArray = ["ali", "ümitcan", "tolga"];
        return(
            <div>
                <App arrayo = {myArray}/>
                <p>araya</p>
                <App2/>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);



