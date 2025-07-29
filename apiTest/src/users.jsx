import axios from "axios";
import { useEffect, useState } from "react";
import loadICon from "./assets/4990502.png";
const Users = ({ currentPage, setTotalPosts }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  let postsURL = "https://jsonplaceholder.typicode.com/users";

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
              <h1>{each.name}</h1>
              <hr style={{ margin: "0" }} />
            </div>
            <div className="user-body">
              <p>
                Username:{" "}
                <span style={{ color: "rgb(206, 178, 95)" }}>
                  {each.username}
                </span>
              </p>
              <p>
                Email:{" "}
                <span style={{ color: "rgb(206, 178, 95)" }}>{each.email}</span>
              </p>
              <p>
                Phone:{" "}
                <span style={{ color: "rgb(206, 178, 95)" }}>{each.phone}</span>
              </p>
              <p>
                Address:{" "}
                <span style={{ color: "rgb(206, 178, 95)" }}>
                  {each.address.city}
                </span>
              </p>
              <p>
                Website:{" "}
                <span style={{ color: "rgb(206, 178, 95)" }}>
                  {each.website}
                </span>
              </p>
            </div>
            <p>{each.id}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
