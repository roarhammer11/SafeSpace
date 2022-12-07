import Button from "./non-route-components/buttonComponent";
import UserPanel from "./non-route-components/userPanelComponent";
const MentalDisordersFilter = () => {
  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="w-70 p-3 ms-5 h-100">
        <div className=" d-flex flex-column align-items-center">
          <div className="disorder-filter-container">
            <center>
              <h1 className="mt-5 mb-5">Mental Disorders Filter</h1>
            </center>
            <p>
              Look for mental mealth professionals that specialize ONLY in these
              disorders
            </p>
            <div className="d-flex w-50 ">
              <Button name="Anxiety" width="w-100" style={{margin: "2px"}} />
              <Button name="ADHD" width="w-100" style={{margin: "2px"}} />
            </div>
            <div className="d-flex w-50 ">
              <Button name="Autism" width="w-100" style={{margin: "2px"}} />
              <Button name="OCD" width="w-100" style={{margin: "2px"}} />
            </div>
            <form className="form-inline d-flex mt-5">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <Button name="Save" width="w-25" style={{marginTop: "4rem"}}/>
          </div>
        </div>
      </div>
      <div className="mt-5 w-30">
        <UserPanel />
      </div>
    </div>
  );
};

export default MentalDisordersFilter;
