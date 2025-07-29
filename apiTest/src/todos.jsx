import axios from "axios";
import { useEffect, useState } from "react";
import loadICon from "./assets/4990502.png";
const Todos = ({ currentPage, setTotalPosts }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  let todosURL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${todosURL}?_page=${currentPage}&_limit=10`)
      .then((response) => {
        const totalPosts = response.headers.get("X-TOTAL-COUNT");
        setTodos(response.data);
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
        todos.map((each) => (
          <div className="todo-card" key={each.id}>
            <div
              className="title"
              style={{ width: "80%", alignItems: "start" }}
            >
              <h1 style={{ textAlign: "start" }}>{each.title}</h1>
            </div>
            <div>
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={each.completed}
                  onChange={() => setChecked(!checked)}
                />
                <span className="checkmark" />
              </label>{" "}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
