import React from 'react';




export default class App extends React.Component {

    constructor(prooops) {
        super(prooops); // calls the constructor of the extended class
                      // which is React.Component
        this.age = prooops.age;
        this.state = {
            name = "ümitcan"
        }
    }

    getaged = () => {
        this.age += 1;
        console.log(this.state);
        console.log(this.age);
        this.setState( {
            age: this.age
        });
    }

    render() {
        
        return(
            <div>
                <p>heyy</p>
                <p>{this.age}</p>
                <button onClick={this.getaged}>Make me older!</button>
            </div>
        )
    }
}