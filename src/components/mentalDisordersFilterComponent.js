// import Button from "./non-route-components/buttonComponent";
import UserPanel from "./non-route-components/userPanelComponent";
const MentalDisordersFilter = () => {
  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="w-70 p-3 ms-5 h-100">
        <div className=" d-flex flex-column align-items-center">
          <h3 className="mt-5 mb-5">Mental Disorders Filter</h3>
        </div>
      </div>
      <div className="mt-5 w-30">
        <UserPanel />
      </div>
    </div>
  );
};

export default MentalDisordersFilter;
