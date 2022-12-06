import logo from ".././logo.svg";
import React, {Component} from "react";
class Index extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
  }
  componentDidMount() {}

  componentWillUnmount() {}

  nextPage() {
    window.location.replace("/page2");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.nextPage}> To Page2 </button>
        </header>
      </div>
    );
  }
}

export default Index;
