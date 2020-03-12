import React from 'react';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 0
        };

        setTimeout( () => {
            this.setState({
                status: 1
            });
        }, 3000);
        //bunu sadece re-render triggerlamak için kullandım

        console.log("constructor");
    }
   

    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("component did mount");
    }

    componentWillReceiveProps(nextProbs) {
        console.log("component will receive props", nextProbs);
    }
    //bu hiç çalışmadı, uğraşmadım çalıştırmaya, tam bilmiyorum ne olunca çalışıyo
    
    shouldComponentUpdate(nextProbs, nextState) {
        console.log("should component update", nextProbs, nextState);
        return true;
    }

    componentWillUpdate(nextProbs, nextState) {
        console.log("component will update", nextProbs, nextState);
    }

    componentDidUpdate(prevProbs, prevState) {
        console.log("component did update", prevProbs, prevState)
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }

    render() {
        return(
            
            <div>
                <p>heyy, I am the "App" component!</p>
            </div>
        );
    }
}

//shouldComponentUpdate methodu falsa return ederse, re-render olmaz (istersen fonksiyonun içinde yazanlardan bağımsız şeyleri değiştir yine olmaz), true olmasa da false olmaması lazım! Yani bu methodu ister tanımla ister tanımlama, bu hep var aslında ve default olarak "true", methodu yazıp/tanımlayıp manuel olarak değiştirirsen tüm re-render method kontrolünü eline almış olursun. 