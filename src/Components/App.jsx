import React from 'react';





export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <p>heyy</p>
                {this.props.fonksiyon()}
            </div>
        );
    }
}


