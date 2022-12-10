import UserPanel from "../non-route-components/userPanelComponent";
import GoogleMaps from "../non-route-components/map";
const Explore = () => {
  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="w-70 p-3 ms-5 h-100">
        <div className=" d-flex flex-column align-items-center">
          <h3 className="mt-5 mb-5">Explore</h3>
          <GoogleMaps />
        </div>
      </div>
      <div className="mt-5 w-30">
        <UserPanel />
      </div>
    </div>
  );
};

export default Explore;
