import React from "react";
import BRT from "../images/brt.jpg";
import Bus from "../images/bus.jpg";

function NewsUpdates() {
  return (
    <>
      <div className="container text-center my-4">
        <h3>News &amp; Updates</h3>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={BRT} className="card-img-top p-3" alt="..." />
              <p
                style={{
                  font: "Arial",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                BRT fares revert 100<br></br>percent to former <br></br>rate
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Bus} className="card-img-top p-3" alt="..." />
              <p
                style={{
                  font: "Arial",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Lagos launches 500 <br></br>First and Last Mile buses <br></br>
                as alternative to Okada
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsUpdates;
