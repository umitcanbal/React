import React from 'react';
import ReactDOM from 'react-dom';

import './index.html';
import './index.scss';

import App from './Components/App.jsx';


// let example = <div>alal</div>
// let example2 = React.createElement("div", null, "alal");
//*** Bunlar aynı şey


// let a = App;
// console.log("it is a", a);
//*** Sadece class/fonksiyon/componentin tanımını yazdırır. Constructor'ı render'ı vs çağırmaz.


// let b = <App/>
// console.log("it is b", b);
//*** Bu hiçbir şey göstermiyo, sadece react elementini gösteriyo, prop'un içi de bomboş??????????????????????????


// let d = new App;
// console.log("it is d", d);
//*** Bu component'in construct methodunu tamamen çalıştırır, render'ı çalıştırmaz AMA sen this.render() diye constructor'ın içine yazarsan o zaman full her şeyi elde edersin AKSİ HALDE AŞAĞIDAKİ GİBİ...
//*** EK NOT: Burada "d" aynı zamanda "this"'e eşit olur! Yani component instance


// let e = d.render();
// console.log("it is e", e);
//*** Buradaki "e" react elementidir.


// console.log(<new App/>);
//*** Bu saçma sapan bi şey oldu




// ReactDOM.render(
//     <App/>,
//     document.getElementById('app')
// );




// console.log(<App />);
// console.log(React.createElement(App, null, "noluyo"));

//Şu yukarıdaki iki satır tamamen aynı!! ÇOK ÖNEMLİ!

// console.log(App); Bu ise çok farklı bi şey.

// ReactDOM.render(
//     React.createElement(App, null, "noluyo"),
//     document.getElementById('app')
// );
//Böyle de renderlayabilirsin App'ı aynı şey oluyo. Ama browserda noluyo yazmaz, App'in içinde neyi returnlüyosan o yazar. Çünkü zaten genel olarak (galiba hiçbir zaman) biz this.props.children'a tekabül eden şeyi renderlamıyoruz ki, şimdi niye renderlayalım.
// Eğer ki bu şekilde ekrana "noluyo"yu yazdırmak istiyosan, git App componentinde, return kısmına {this.props.children} de, o zaman yazdırırsın.




//Bi websitesinden bulduğum açıklama
//JSX is just a tool that converts files like this:

// let element =
// <div className='test'>
//   Hello, world!
// </div>
// Into files like this:

// let element =
// React.createElement(
//   'div',
//   { className: 'test' },
//   "Hello, world!"
// )
// To repeat myself, all JSX does is replace a file’s <tags> with equivalent calls to React.createElement().

// JSX is not, not a special way to embed HTML in JavaScript - it’s not a template system. It’s just a tool for rewriting <tags> into calls to React.createElement().




// 1-console.log(<App />);
// 2-console.log(App);
// 3-console.log(this); (App.jsx sayfasındaki constructor'ın içine yazıldı bu)

// Bu üçü de farklı sonuçlar veriyo. 
// BİRİNCİSİ; react element
// İKİNCİSİ; class/fonksiyon/komponent
// ÜÇÜNCÜSÜ; component instance



