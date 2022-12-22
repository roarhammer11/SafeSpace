import Button from "./buttonComponent";
import "../css-components/userPanel.css";
const UserPanel = () => {
  return (
    <div className="navright">
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="w-100 p-3 h-100">
        <div className=" d-flex justify-content-around">
          <div className="d-flex flex-column mt-5">
            <h4>0 Following</h4>
            <h4>0 Followers</h4>
          </div>
          <img src="https://via.placeholder.com/150x150" alt="sample"></img>
        </div>
        <center>
          <p>Some features are not yet available...</p>
        </center>
        <div id="user-panel" className="d-flex flex-column mt-5">
          <button>Edit Profile</button>
          <Button
            className="navbutton"
            name="Mental Health Professionals Near Me"
            location="/Dashboard/MentalHealthProfessionals"
          />
          <Button name="News Feed" location="/Dashboard" />
          <Button className="navbutton" name="Messages" location="/Dashboard/Messages" />
          <Button
            name="Mental Disorders Filter"
            location="/Dashboard/MentalDisordersFilter"
          />
          <Button className="navbutton" name="Explore" location="/Dashboard/Explore" />
          <button>Settings</button>
          <Button className="navbutton" name="Logout" location="/" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserPanel;
