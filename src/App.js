import React, { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import "./styles.css";

function App() {
  const [currentPage, setCurrentPage] = useState("page1");

  return (
    <div className="container">
      {currentPage === "page1" ? (
        <Page1 setCurrentPage={setCurrentPage} />
      ) : (
        <Page2 />
      )}
    </div>
  );
}

export default App;
