import Button from "./non-route-components/buttonComponent";
import "./css-components/usersForm.css";

const Index = () => {
  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="left w-50 p-3 ms-5 h-100">
        <div className=" d-flex justify-content-center">
          <p>
            Bringing mental health professionals from all over the world,
            SafeSpace serves as an easy-to-cross bridge linking them and those
            who need their professional help. By "easy-to-cross" bridge, we mean
            that this website provides easy access to professional help for all
            sorts of mental disorders. You are not alone, and most
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

          <h5 className="tagline">a judgment free place</h5>
          <div className="main">  	
            <input type="checkbox" id="chk" aria-hidden="true" />

              <div class="signup">
                <form>
                  <label for="chk" aria-hidden="true">Sign up</label>
                  <select>
                    <option selected="true" disabled="disabled">Select type of user:</option>
                    <option>Mental Health Professional</option>
                    <option>Not a Mental Health Professional</option>
                  </select>
                  <input type="text" name="txt" placeholder="User name" required="" />
                  <input type="email" name="email" placeholder="Email" required="" />
                  <input type="password" name="pswd" placeholder="Password" required="" />
                  <button>Sign up</button>
                </form>
              </div>

              <div className="login">
                <form>
                  <label for="chk" aria-hidden="true">Login</label>
                  <input type="email" name="email" placeholder="Email" required="" />
                  <input type="password" name="pswd" placeholder="Password" required="" />
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
