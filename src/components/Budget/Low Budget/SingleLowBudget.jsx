import React from "react";
import "./SingleLowBudget.css";
//import cooler from "../../../Assets/cooler.jpg";
const SingleLowBudget = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="card-wrapper">
        <div className="card-box">
          <div className="upper-card">
            <img src={data.image} alt="" />
          </div>
          <div className="lower-card">
            <h3>{data.name}</h3>
            <h4>{data.price}</h4>
            <p>{data.description}</p>
            <button className="btn-view">View Detail</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleLowBudget;


/*
<div className="card-wrapper">
        <div className="card-box">
          <div className="upper-card">
            <img src={data.image} alt="" />
          </div>
          <div className="lower-card">
            <h3>{data.name}</h3>
            <h4>{data.price}</h4>
            <p>{data.description}</p>
            <button className="btn-view">View Detail</button>
          </div>
        </div>
      </div>*/