import axios from "axios";
import { useEffect, useState } from "react";
import loadICon from "./assets/4990502.png";
const Post = ({ currentPage, setTotalPosts }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  let postsURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${postsURL}?_page=${currentPage}&_limit=10`)
      .then((response) => {
        const totalPosts = response.headers.get("X-TOTAL-COUNT");
        setPosts(response.data);
        setTotalPosts(totalPosts);
        setLoading(false);

        console.log(totalPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  return (
    <div className="container">
      {loading ? (
        <div className="loadin">
          <img style={{ height: "100px", margin: "200px" }} src={loadICon} />
        </div>
      ) : (
        posts.map((each) => (
          <div className="card" key={each.id}>
            <div className="title">
              <h1>{each.title}</h1>
              <hr style={{ width: "500px", margin: "0" }} />
            </div>
            <div className="body">
              <p>{each.body}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
