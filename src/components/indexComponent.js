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
      <div className="App-Container container-fluid h-100 d-flex">
        <div className="left w-50 p-3 ms-5 h-100">
          <div className=" d-flex justify-content-center">
            <p>
              Bringing mental health professionals from all over the world,
              SafeSpace serves as an easy-to-cross bridge linking them and those
              who need their professional help. By "easy-to-cross" bridge, we
              mean that this website provides easy access to professional help
              for all sorts of mental disorders. You are not alone, and the most
              importantly, you are getting help :)
              <br />
              <br />
              Suicide hotline in your area is 0966-351-4518
            </p>
          </div>
        </div>
        <div className="right w-50">
          <div className="d-flex flex-column align-items-center">
            <h1>
              SafeSpace
              <br />
            </h1>

            <h5>a judement free place</h5>
            <button
              type="button"
              className="btn btn-primary btn-lg  w-25 sign-up-button"
              onClick={this.nextPage}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-primary btn-lg  w-25"
              onClick={this.nextPage}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
