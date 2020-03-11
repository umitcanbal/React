import React from 'react';




export default class App extends React.Component {

    constructor(prooops) {
        super(prooops); // calls the constructor of the extended class
                      // which is React.Component
        
        this.state = {
            age: prooops.initialAge,
            name: "ümitcan"
        }
    }

    getAged = () => {
        this.setState(
            {
                // age: age+3 !!!! BÖYLE YAZMAYA ÇALIŞTIM, tabii ki çalışmadı
                //Ayrıca soldaki "age" direkt olarak şuna eşit oluyo: "this.state.age" ama sağdaki tabii ki eşit olmuyo, sağdaki tanımlanmamış olan bir age variable'ına eşit oluyo.
                age: this.state.age+1
            }
        );
    }

    render() {
        
        return(
            <div>
                <p>heyy</p>
                <p>{this.state.age}</p>
                <button onClick={this.getAged}>Make me older!</button>
            </div>
        )
    }
}

//re-render için this.setState fonksiyonun çalışması yeterli. State değiştiğinde otomatik olarak re-render olmuyo, bir şekilde this.setState çağrılacak şekilde ayarlaman lazım state değişimlerini, yoksa browsera yansımaz re-render olmayacağı için.

//genel kural: props değerlerini state'e assign etme EĞER Kİ bu başlangıç değeri değilse (ki buradaki durumda başlangıç değeri, o yüzden sorun yok, kuralı çiğnemiş olmuyoruz)