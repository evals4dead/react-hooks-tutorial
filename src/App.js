import React, { Component } from "react";
import Counter from "./Counter";
import Form from "./Form";
import Post from "./Post";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <Form />
        <hr />
        <Post />
      </div>
    );
  }
}

export default App;
