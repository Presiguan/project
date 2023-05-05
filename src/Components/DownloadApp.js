import React from "react";
import Map from "../images/map.png";
import "../css/download.css";

function DownloadApp() {
  return (
    <>
      <div className="container download p-0 rounded-3">
        <div className="row align-items-center">
          <div className="col text-center text-white">
            <h1>Download Our App</h1>
            <h4>
              Enjoy our services from <br />
              the comfort of your <br />
              phone
            </h4>
            <a href="/">
              <h6 style={{ color: "white", textDecoration: "underline" }}>
                Download now!
              </h6>{" "}
            </a>
          </div>
          <div className="col justify-content-end">
            <img src={Map} alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
