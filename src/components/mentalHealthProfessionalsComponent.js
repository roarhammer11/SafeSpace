// import Button from "./non-route-components/buttonComponent";
import UserPanel from "./non-route-components/userPanelComponent";
const MentalHealthProfessionals = () => {
  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="w-70 p-3 ms-5 h-100">
        <div className=" d-flex flex-column align-items-center">
          <h3 className="mt-5 mb-5">Mental Health Professionals Near Me</h3>
          <div id="health-professionals" className="d-flex flex-wrap">
            <div className="d-flex flex-column align-items-center">
              <img src="https://via.placeholder.com/150x150"></img>{" "}
              <h4>name</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="https://via.placeholder.com/150x150"></img>{" "}
              <h4>name</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="https://via.placeholder.com/150x150"></img>{" "}
              <h4>name</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="https://via.placeholder.com/150x150"></img>{" "}
              <h4>name</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="https://via.placeholder.com/150x150"></img>{" "}
              <h4>name</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="https://via.placeholder.com/150x150"></img>{" "}
              <h4>name</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="https://via.placeholder.com/150x150"></img>{" "}
              <h4>name</h4>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="https://via.placeholder.com/150x150"></img>{" "}
              <h4>name</h4>
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

export default MentalHealthProfessionals;
