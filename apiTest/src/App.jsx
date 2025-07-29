import { useState } from "react";
import "./App.css";
import Post from "./post";
import PaginationBar from "./paginationBar";
import Todos from "./todos";
import { Link, Outlet, Route, Routes } from "react-router";
import Users from "./users";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  return (
    <>
      <h1
        style={{
          color: "rgb(213, 167, 30)",
          fontFamily: "lamaSans",
          fontSize: "40px",
          margin: "70px",
        }}
      >
        API Task{" "}
      </h1>

      <header>
        <nav className="pagination">
          <Link
            onClick={() => setCurrentPage(0)}
            id="link-btn"
            style={{ padding: "10px" }}
            to="/"
          >
            Posts
          </Link>
          <Link
            onClick={() => setCurrentPage(0)}
            id="link-btn"
            style={{ padding: "10px" }}
            to="/todos"
          >
            ToDos
          </Link>
          <Link
            onClick={() => setCurrentPage(0)}
            id="link-btn"
            style={{ padding: "10px" }}
            to="/users"
          >
            Users
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Post currentPage={currentPage} setTotalPosts={setTotalPosts} />
            }
          />
          <Route
            path="/todos"
            element={
              <Todos currentPage={currentPage} setTotalPosts={setTotalPosts} />
            }
          />
          <Route
            path="/users"
            element={
              <Users currentPage={currentPage} setTotalPosts={setTotalPosts} />
            }
          />
        </Routes>
      </main>

      {/* <Post currentPage={currentPage} setTotalPosts={setTotalPosts} /> */}
      {/* <Todos currentPage={currentPage} setTotalPosts={setTotalPosts} /> */}
      <PaginationBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPosts={totalPosts}
      />
      <h4>2025 @ Muhammad Si </h4>
    </>
  );
}

export default App;
