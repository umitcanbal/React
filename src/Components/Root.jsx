import React from "react";


export default class Root extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
        <p>Direkt Root.jsx'in içinden yazıyorum</p>
      </div>
    )
  }
}