import React, { useState } from "react";
import UserPanel from "../non-route-components/userPanelComponent";

function SettingsComponent() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOnClick = () => {
    fetch("/api/disableAccount", {
      method: "PATCH",
      body: JSON.stringify({
        status: "disabled",
        userId: sessionStorage.getItem("accountId"),
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
              onClick={handleOpenModal}
            >
              Disable Account
            </button>
            {openModal && (
              <div className=" d-flex flex-column align-items-center">
                <h4 className="mt-5 mb-5">
                  Are you sure you want to disable your account?
                </h4>
                <button
                  className="btn btn-primary btn-lg w-50"
                  name="Disable Account"
                  onClick={handleOnClick}
                >
                  Yes
                </button>
                <div className="w-70 p-3 ms-5 h-100" />
                <button
                  className="btn btn-primary btn-lg w-50"
                  name="No"
                  onClick={handleOpenModal}
                >
                  No
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 w-30">
          <UserPanel />
        </div>
      </div>
    </>
  );
}

export default SettingsComponent;
