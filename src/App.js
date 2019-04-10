import React, { Component } from "react";
import "./App.css";
import Header from "./container/Header/Header";
import Generator from "./container/Generator/Generator";
import Footer from "./container/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Generator />
        <Footer />
      </div>
    );
  }
}

export default App;
