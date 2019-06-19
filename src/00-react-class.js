import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  state = {
    text: "",
    checked: false
  };

  render() {
    const { text, checked } = this.state;
    return (
      <section>
        <h1>CLASS</h1>
        <input
          type="text"
          value={text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={e => this.setState({ checked: e.target.checked })}
        />
        <ul>
          <li>{text}</li>
          <li>{checked.toString()}</li>
        </ul>
      </section>
    );
  }
}
