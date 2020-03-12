import React from 'react';





export default class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <p>heyy</p>
                <button onClick={this.props.fonksiyon}>Selamlama Butonu</button>
            </div>
        );
    }
}

//ÇOK ÖNEMLİ!!! Bu durumda child komponentten parent komponenta ulaşmış oluyorum!!! Selamlama Butonu child komponentteki bi şey ama fonksiyonun çalıştığı yer parent!!!
