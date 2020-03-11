import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props); // calls the constructor of the extended class
                      // which is React.Component
        console.log(this);
        console.log(333);

        // this.render() 
        
    }

    render() {
        const myVariable = React.createElement("h3", null, "hey hey");
        console.log(3311);
        return(
            <div>
                {/* <h3>Hey Hey!</h3> */}
                {myVariable} 
                {console.log(3311)}

                {/* Üstteki iki satır tamamen aynı işi yapıyo browserda, yani ben <h3></h3> şeklinde html taginin içine bir şey koyunca aslında React.createElement fonksiyonunu çağırmış oluyorum, yani "<></>" direkt olarak fonksiyon başlatıyo ve arka planda aynı işi yapıyo. Bu iki satırdaki kodun da prop'ları var (denemek istersen "{console.log(myVariable)}" ve "{console.log(<h3>Helloo</h3)}" şeklinde yazıp sonuçlara bakabilirsin ), ve propları tamamen boş değil (ben "null" diye belirtmeme rağmen) props.children sekmesi dolu. Neyle dolu? içine yazdığımız düz yazıyla dolu, bunlar prop.children'a düşüyolar/yazılıyolar.   */}

                {/* Mesela "console.log(myVariable.props.children)" bunu yazdığında sana direkt içine yazdığın metni veriyo, ama this.props.children diyemiyosun çünkü bu neye tekabül eder? Seni renderlayan (yani ReactDOM, yani index.jsx sayfası) komponentin içine yazdığın şeye, yani <App>XXX</App> buradaki this.probs.children = XXX olur, parenttan verdiğimiz herhangi bi prop gibi. "this" component instance'dır, "myVariable" react elementtir!  */}
            </div>
        )
    }

}