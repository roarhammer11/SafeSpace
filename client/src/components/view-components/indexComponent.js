// import Button from "../non-route-components/buttonComponent";
import "../css-components/usersForm.css";
import {useState} from "react";

// import ReactDOM from "react-dom/client";
const Index = () => {
  const [inputs, setInputs] = useState({});

  const handleSignUpFormChange = (event) => {
    const name = event.target.name;
    var value;
    if (name === "userType") {
      value = event.target.options[event.target.selectedIndex].text;
    } else {
      value = event.target.value;
    }
    setInputs((values) => ({...values, [name]: value}));
  };

  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();
    fetch("/api/signUp", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Successfuly Added " + inputs.userType + " to the database.");
        } else if (response.status === 409) {
          alert("Email already exists");
        } else {
          alert("Server could not process at the moment");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(inputs);
  };

  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="left w-50 p-3 ms-5 h-100">
        <div className=" d-flex justify-content-center">
          <p>
            Bringing mental health professionals from all over the world,
            SafeSpace serves as an easy-to-cross bridge linking them and those
            who need their professional help. By "easy-to-cross" bridge, we mean
            that this website provides easy access to professional help for all
            sorts of mental disorders. You are not alone, and most importantly,
            you are getting help :)
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
            <img src="" alt="" />
            <br />
          </h1>

          <h5 className="tagline">a judgment free place</h5>
          <div className="main" id="main">
            <input type="checkbox" id="chk" aria-hidden="true" />
            <div className="signup">
              <form onSubmit={handleSignUpFormSubmit}>
                <label htmlFor="chk" aria-hidden="true">
                  Sign up
                </label>
                <select
                  name="userType"
                  value={inputs.userType || ""}
                  required
                  onChange={handleSignUpFormChange}
                >
                  <option value="">Select type of user:</option>
                  <option value="Mental Health Professional">
                    Mental Health Professional
                  </option>
                  <option value="Not a Mental Health Professional">
                    Not a Mental Health Professional
                  </option>
                </select>
                <input
                  type="text"
                  name="userName"
                  placeholder="User name"
                  value={inputs.userName || ""}
                  onChange={handleSignUpFormChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={inputs.email || ""}
                  onChange={handleSignUpFormChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={inputs.password || ""}
                  onChange={handleSignUpFormChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
                <button>Sign up</button>
              </form>
            </div>

            <div className="login">
              <form>
                <label htmlFor="chk" aria-hidden="true">
                  Login
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                />
                <input
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                />
                <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
