import React from 'react';




export default class App extends React.Component {

    constructor(props) {
        super(props); // calls the constructor of the extended class
                      // which is React.Component

    }

    render() {
        
        return(
            <div>
                <p>App'ten geliyorum</p>
                <ul>
                    {this.props.arrayo.map( (item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}