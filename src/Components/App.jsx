import React from 'react';





export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: this.props.initialName
        }

    }

    changeName = () => {
        this.props.fonksiyon(this.state.newName)
    }

    yaz = (event) => {
        this.setState(
            {
                newName: event.target.value
            }
        )
    }

    render() {
        return(
            <div>
                
                <p>heyy</p>
                
                <input type="text" value={this.state.newName} onChange={this.yaz}/>
                <button onClick={this.changeName}>İsim Değiştirme Butonu</button>
            </div>
        );
    }
}

