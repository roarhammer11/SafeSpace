import Button from "./buttonComponent";
const UserPanel = () => {
  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="w-100 p-3 h-100">
        <div className=" d-flex justify-content-around">
          <div className="d-flex flex-column mt-5">
            <h4># Following</h4>
            <h4># Followers</h4>
          </div>
          <img src="https://via.placeholder.com/150x150"></img>
        </div>
        <center>
          <p>Lorem ipsum dolor sit amet</p>
        </center>
        <div id="user-panel" className="d-flex flex-column mt-5">
          <button>Edit Profile</button>
          <Button
            name="Mental Health Professionals Near Me"
            location="/Dashboard/MentalHealthProfessionals"
          />
          <Button name="News Feed" location="/Dashboard" />
          <Button name="Messages" location="/Dashboard/Messages" />
          <Button
            name="Mental Disorders Filter"
            location="/Dashboard/MentalDisordersFilter"
          />
          <Button name="Explore" location="/Dashboard/Explore" />
          <button>Settings</button>
          <Button name="Logout" location="/" />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
