import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App from './Components/App.jsx';


class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <App initialAge={27}/>
                <App initialAge={27}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);



