import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App from './Components/App.jsx';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeMounted : true
        }

    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted : !this.state.homeMounted
        });
    }

    changeMounted = () => {
        this.onChangeHomeMounted()
    }

    render() {
        let homeComponent = "";

        if (this.state.homeMounted) {
            homeComponent = <App name="ümitcan"/>
        }
        
        return(
            <div>
                {homeComponent}
                <button onClick={this.changeMounted}>Unmount me</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);



