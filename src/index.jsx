import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App from './Components/App.jsx';
import Root from './Components/Root.jsx';


class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <Root>
                Root'un childrenıyım, index.jsx'in içinden yazıyorum!
            </Root>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);



