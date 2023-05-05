import React from "react";
import "../css/services.css";
import Card1 from "../images/service1.png";
import Card2 from "../images/service2.png";
import Card3 from "../images/service3.png";

function Services() {
  return (
    <>
      <div className="container text-center my-4">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={Card1} className="card-img-top p-3" alt="..." />
              <div class="card-body">
                <h5
                  style={{
                    font: "Arial",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  className="card-title"
                >
                  Last Mile
                </h5>
                <p className="card-text">
                  Book a Seat at the Comfort <br></br>of Your Home
                </p>
                {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Card2} className="card-img-top p-3" alt="..." />
              <div class="card-body">
                <h5
                  style={{
                    font: "Arial",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  className="card-title"
                >
                  Last Mile
                </h5>
                <p className="card-text">
                  Book a Seat at the Comfort <br></br>of Your Home
                </p>
                {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Card3} className="card-img-top p-3" alt="..." />
              <div class="card-body">
                <h5
                  style={{
                    font: "Arial",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  className="card-title"
                >
                  Lag Ride
                </h5>
                <p className="card-text">
                  Book a Seat at the Comfort <br></br>of Your Home
                </p>
                {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
