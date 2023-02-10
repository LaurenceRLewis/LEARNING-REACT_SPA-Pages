import React, { useState, useEffect } from "react";

function Page2() {
  const [status, setStatus] = useState("");
  const statusId = "status-message";

  useEffect(() => {
    setStatus("Your page is loaded");
    document.getElementById("page-heading").focus();
  }, []);

  return (
    <div className="page">
      <h1 id="page-heading" tabIndex="-1" aria-describedby={statusId}>
        Page 2
      </h1>
      <p id={statusId}>{status}</p>
    </div>
  );
}

export default Page2;
