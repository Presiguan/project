import React from "react";
// import "../css/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div style={{ justifyContent: "space-between" }} className="container">
          <a
            style={{
              font: "Arial",
              fontSize: "120%",
              fontWeight: "bolder",
            }}
            className="navbar-brand"
            href="/"
          >
            EasyRide
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{
              alignItem: "right",
            }}
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  style={{
                    color: "#037B9F",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    color: "#037B9F",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                  className="nav-link"
                  href="/"
                >
                  Bookings
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    color: "#037B9F",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                  className="nav-link"
                  href="/"
                >
                  Traffic Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    color: "#037B9F",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                  className="nav-link"
                  href="/"
                >
                  Wallet
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    color: "#037B9F",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                  className="nav-link"
                  href="/"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    color: "#037B9F",
                    fontWeight: "500",
                    fontSize: "90%",
                  }}
                  className="nav-link"
                  href="/"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid justify-content-end">
          <button className="btn btn-sm btn-outline-success me-2" type="button">
            Login
          </button>
          <button className="btn btn-sm btn-outline-success me-2" type="button">
            Signup
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
