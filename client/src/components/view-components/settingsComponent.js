import React from "react";
import UserPanel from "../non-route-components/userPanelComponent";

function settingsComponent() {
  const handleOnClick = () => {
    fetch("/api/disableAccount", {
      method: "PATCH",
      body: JSON.stringify({
        status: "disabled",
        userId: localStorage.getItem("user_id"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 200) {
          alert("Succesfully Disabled Account");
          window.location.href = "/";
        } else {
          alert("Unable to disable account. Please Try Again");
        }
      });
  };

  return (
    <>
      <div className="App-Container container-fluid h-100 d-flex">
        <div className="w-70 p-3 ms-5 h-100">
          <div className=" d-flex flex-column align-items-center">
            <h3 className="mt-5 mb-5">Settings</h3>
            <button
              className="btn btn-primary btn-lg w-50"
              name="Disable Account"
              onClick={handleOnClick}
            >
              Disable Account
            </button>
          </div>
        </div>
        <div className="mt-5 w-30">
          <UserPanel />
        </div>
      </div>
    </>
  );
}

export default settingsComponent;
