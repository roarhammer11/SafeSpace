import UserPanel from "./non-route-components/userPanelComponent";
const Messages = () => {
  return (
    <div className="App-Container container-fluid h-100 d-flex">
      <div className="w-70 p-3 ms-5 h-100">
        <div className=" d-flex flex-column align-items-center">
          <h1 className="mt-5 mb-5">Messages</h1>
          <div className="messages-container">
            <div className="d-flex">
              <img src="https://via.placeholder.com/125x125"></img>
              <div className="d-flex flex-column">
                <h3>John O. Lee</h3>
                <h4> Hey, How are you? Just checking in.</h4>
              </div>
            </div>
            <div className="d-flex">
              <img src="https://via.placeholder.com/125x125"></img>
              <div className="d-flex flex-column">
                <h3>my beloved bestie</h3>
                <h4>im having my fourth breakdown today.</h4>
              </div>
            </div>
            <div className="d-flex">
              <img src="https://via.placeholder.com/125x125"></img>
              <div className="d-flex flex-column">
                <h3>Diana</h3>
                <h4>I have taken my meds already tyy</h4>
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

export default Messages;
