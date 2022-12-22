// import Button from "./non-route-components/buttonComponent";
import "../css-components/dashboard.css";
import React from "react";
import UserPanel from "../non-route-components/userPanelComponent";
import {useState} from "react";
import PostFetching from "./PostFetching";
const Dashboard = () => {
  const [inputs, setInputs] = useState({});

  const textSize = {
    fontSize: "1.5rem",
  };

  const handleMessageFormChange = (event) => {
    const name = event.target.name;
    var value;
    if (name === "userType") {
      value = event.target.options[event.target.selectedIndex].text;
    } else {
      value = event.target.value;
    }
    setInputs((values) => ({...values, [name]: value}));
  };

  const handlePostSubmit = (event) => {
    event.preventDefault();
    handlePost();
  };

  const handleCreatePostMedia = (event) => {
    document.getElementById("create-post-media").click();
  };

  function handlePost() {
    fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Successfuly published your post!");
        } else if (response.status === 409) {
          alert("Email already exists.");
        } else {
          alert("Server could not process at the moment");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    /* html by https://codepen.io/e_javieer/pen/jOKvqyw */
    <div className="App-Container container-fluid h-100">
      <section className="create-post">
        <img
          className="create-post__avatar"
          src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/avatar-tumblr.png"
          alt=""
        />
        <form
          id="create-post-form"
          className="create-post__form"
          onSubmit={handlePostSubmit}
        >
          <div className="create-post__text-wrap">
            <textarea
              style={textSize}
              aria-label="What's on your mind?"
              name="message"
              value={inputs.message || ""}
              onChange={handleMessageFormChange}
              id="create-post-txt"
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <div
            className="create-post__media-wrap"
            id="create-post-media-wrap"
          ></div>

          <div className="create-post__buttons">
            <div className="create-post__assets-buttons">
              <button
                type="button"
                aria-label="Add an image to the post"
                className="create-post__asset-btn"
                htmlFor="create-post-media"
                onClick={(event) => handleCreatePostMedia(event)}
              >
                <img
                  className="icon"
                  src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/camera-tumblr.svg"
                  alt=""
                />
                Photo
                <input
                  type="file"
                  name="post-img"
                  id="create-post-media"
                  accept=".png, .jpg, .jpeg, .gif"
                />
              </button>
              <button
                type="button"
                aria-label="Add a video to the post"
                className="create-post__asset-btn"
                htmlFor="create-post-media"
                disabled
              >
                <img
                  className="icon"
                  src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/quote-tumblr.svg"
                  alt=""
                />
                Quote
              </button>
              <button
                type="button"
                aria-label="Add a video to the post"
                className="create-post__asset-btn"
                htmlFor="create-post-media"
                disabled
              >
                <img
                  className="icon"
                  src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/link-tumblr.svg"
                  alt=""
                />
                Link
              </button>
              <button
                type="button"
                aria-label="Add a video to the post"
                className="create-post__asset-btn"
                htmlFor="create-post-media"
                disabled
              >
                <img
                  className="icon"
                  src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/chat-tumblr.svg"
                  alt=""
                />
                Chat
              </button>
              <button
                type="button"
                aria-label="Add a video to the post"
                className="create-post__asset-btn"
                htmlFor="create-post-media"
                disabled
              >
                <img
                  className="icon"
                  src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/audio-tumblr.svg"
                  alt=""
                />
                Audio
              </button>
              <button
                type="button"
                aria-label="Add a video to the post"
                className="create-post__asset-btn"
                htmlFor="create-post-media"
                disabled
              >
                <img
                  className="icon"
                  src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/video-tumblr.svg"
                  alt=""
                />
                Video
              </button>
            </div>
            <button className="create-post__submit">Publish</button>
          </div>
        </form>
      </section>

      <PostFetching />

      <section id="posts-container">
        <article className="post">
          <img
            className="post__avatar"
            src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/avatar-tumblr.png"
            alt=""
          />

          <div className="post__content">
            <header className="post__header">
              <p className="post__user">galactiqangel</p>

              <div className="post__meta">
                <p className="post__reblogs">3,908</p>

                <button className="post__header-btn">
                  <img
                    src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/reblog-tumblr.svg"
                    alt=""
                  />
                </button>
                <button className="post__header-btn">
                  <img
                    src="https://raw.githubusercontent.com/Javieer57/create-post-component/43c8008a45b699957d2070cc23362f1953c65d78/icons/heart-tumblr.svg"
                    alt=""
                  />
                </button>
              </div>
            </header>

            <div className="post__body">
              <img
                className="post__img"
                src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/liz-lee.jpg"
                alt=""
              />
              <a
                href="https://es.wikipedia.org/wiki/My_Life_as_Liz"
                className="post__text"
              >
                My Life As Liz
              </a>
            </div>

            <div className="post__footer">
              <span>#2010s</span>
              <span>#tumblr</span>
              <span>#codepen</span>
            </div>
          </div>
        </article>
      </section>
      <div className="mt-5 w-30">
        <UserPanel />
      </div>
    </div>
  );
};

export default Dashboard;
