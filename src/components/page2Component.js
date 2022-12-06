import React, {Component} from "react";
import Component3 from "./non-route-components/nonPageComponent";
class Page2 extends Component {
  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.state = {
      sampleString: "Page 2",
    };
  }

  nextPage() {  
    window.location.replace("/");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <center>
          <h1>{this.state.sampleString}</h1>
          <Component3 />
          <button onClick={this.nextPage}> To index </button>
        </center>
      </div>
    );
  }
}

export default Page2;
