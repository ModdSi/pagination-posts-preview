import { useState } from "react";
import "./App.css";
import Post from "./post";
import PaginationBar from "./paginationBar";

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
        Randomly Generated Post via API
      </h1>
      <Post currentPage={currentPage} setTotalPosts={setTotalPosts} />
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
