import React, {useState, useEffect, useRef, useCallback} from "react";
import axios from "axios";

function PostFetching() {
  const [posts, setPosts] = useState([]);
  const dataFetchedRef = useRef(false);

  const fetchData = useCallback(() => {
    axios
      .get("http://localhost:3001/api/posts/")
      .then(async (res) => {
        var data = res.data.data;
        const users = await fetchUsers(data);
        setPosts(createPosts(data, users));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchUsers = async (data) => {
    var promise = [];
    var names = [];
    for (var i = 0; i < data.length; i++) {
      promise[i] = await axios.get(
        "http://localhost:3001/api/accounts/" + data[i].accountId
      );
      names.push(promise[i].data.data[0].userName);
    }
    return names;
  };

  const createPosts = (data, users) => {
    var posts = [];
    for (var i = 0; i < data.length; i++) {
      posts.push(
        <div key={i}>
          <img
            className="post__avatar"
            src="https://raw.githubusercontent.com/Javieer57/create-post-component/design/2010/img/avatar-tumblr.png"
            alt=""
          />
          <div className="post__content">
            <header className="post__header">
              <p className="post__user">{users[i]}</p>
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
                src="https://via.placeholder.com/535x356"
                alt=""
              />
              <a href="/Dashboard/#" className="post__text">
                {data[i].message}
              </a>
            </div>

            <div className="post__footer">
              <span>#2010s</span>
              <span>#tumblr</span>
              <span>#codepen</span>
            </div>
          </div>
        </div>
      );
    }
    return posts;
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, [fetchData]);

  return (
    <div id="post-container-div">
      <div>
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
      </div>
      {posts}
    </div>
  );
}

export default PostFetching;
