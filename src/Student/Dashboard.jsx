import React from "react";
// import Header from "./header";
import './App2.css';

function Dashboard() {
  return (
    <div>
      {/* <Header /> */}
      <div className="container mt-4 ">
        <div className="row row-cols-1 row-cols-md-3 g-3 h-4">
          <div className="col">
            <div className="card h-100" style={{ backgroundColor: "#18BD28" }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">0</h5>
                <p className="card-text">Assessment</p>
              </div>
              <a
                href="setassessment"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "black" }}
              >
                More
                <i className="bi bi-arrow-right-circle-fill" />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 " style={{ backgroundColor: "blue" }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">0</h5>
                <p className="card-text">InvitationForm</p>
              </div>
              <a
                href="studentinvitationform"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "black" }}
              >
                More
                <i className="bi bi-arrow-right-circle-fill" />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100" style={{ backgroundColor: "#A764FC" }}>
              {/* <img src="..." className="card-img-top" alt="..." /> */}
              <div className="card-body">
                <h5 className="card-title">0</h5>
                <p className="card-text">Reviews</p>
              </div>
              <a
                href="studentReviews"
                className="small-box-footer"
                style={{ textDecoration: "none", color: "white" }}
              >
                More
                <i className="bi bi-arrow-right-circle-fill" />
              </a>
            </div>
          </div>
          {/* <div className="col">
                        <div className="card h-100" style={{backgroundColor:"#FF0A18"}}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">0</h5>
                                <p className="card-text">Total Routes </p>
                            </div>
                            <a href="routes" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div> */}
          {/* <div className="col">
                        <div className="card h-100" style={{backgroundColor:"blue"}}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body"> */}
          {/* <h5 className="card-title">0</h5> */}
          {/* <p className="card-text">Add Admin</p> */}
          {/* </div>
                            <a href="admin" className="small-box-footer" style={{textDecoration: 'none', color:'white'}}>More info <i className="bi bi-arrow-right-circle-fill" /></a>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
