//import React, { useState, useEffect } from "react";

//Setting focus to the heading
// function Page2() {
//   const [status, setStatus] = useState("");
//   const statusId = "status-message";

//   useEffect(() => {
//     setStatus("Your page is loaded");
//     document.getElementById("page-heading").focus();
//   }, []);

//   return (
//     <div className="page">
//       <h1 id="page-heading" tabIndex="-1" aria-describedby={statusId}>
//         Page 2
//       </h1>
//       <p id={statusId}>{status}</p>
//     </div>
//   );
// }

// export default Page2;

//Setting focus to a link

import React, { useEffect } from "react";

const Page2 = ({ setCurrentPage }) => {
  useEffect(() => {
    document.getElementById("back-to-page1").focus();
  }, []);

  return (
    <div className="page">
      <a
        href="#page1"
        id="back-to-page1"
        onClick={() => setCurrentPage("page1")}
        aria-describedby="page2-heading"
      >
        Previous Page
      </a>
      <h1 id="page2-heading" tabIndex={-1}>
        Page 2
      </h1>
      <p aria-describedby="page2-heading">Your page is loaded</p>
    </div>
  );
};

export default Page2;
