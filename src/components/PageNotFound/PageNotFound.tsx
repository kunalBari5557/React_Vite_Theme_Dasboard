import React, { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const path = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const body = document.querySelector("body");

    body?.classList.add("error404", "text-center");
  }, [path]);
  return (
    <div className="main-content">
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p style={{ color: "white" }}>
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <a
          href="#404"
          onClick={() => navigate(-1)}
          className="btn btn-primary custom-btn"
        >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
