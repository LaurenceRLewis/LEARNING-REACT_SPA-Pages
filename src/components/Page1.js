import React from "react";

function Page1({ setCurrentPage }) {
  return (
    <div className="page">
      <h1>Page 1</h1>
      <a href="#page2" onClick={() => setCurrentPage("page2")}>
        Go to Page 2
      </a>
    </div>
  );
}

export default Page1;
