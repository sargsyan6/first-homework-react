import { Component } from "react";
import "./App.css";
import Search from "./Search";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div>
          <Search/>
        </div>
      </>
    );
  }
}

export default App;
