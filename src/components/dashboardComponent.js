// import Button from "./non-route-components/buttonComponent";
import UserPanel from "./non-route-components/userPanelComponent";
const Dashboard = () => {
  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="w-70 p-3 ms-5 h-100">
        <div className=" d-flex justify-content-center flex-column align-items-center">
          <h2 className="mt-5 mb-5">News Feed</h2>
          <div className="d-flex">
            <div className="w-50">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="w-50">
              <div className="card" aria-hidden="true">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    href="#"
                    tabIndex="-1"
                    className="btn btn-primary disabled placeholder col-6"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-30">
        <UserPanel />
      </div>
    </div>
  );
};

export default Dashboard;
