import React, {Component} from "react";

class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      sampleString: "Component 3",
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <center>
          <h1>{this.state.sampleString}</h1>
        </center>
      </div>
    );
  }
}

export default Component3;
