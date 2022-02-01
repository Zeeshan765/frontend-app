import React from 'react';
import "./MidBudgetPage.css";
import cooler from "../../../Assets/mortar.jpg";

const MidBudgetPage = () => {
  return (
  
  <>
  <div className='product-wrapper'>
    <div className="product-box">
      <div className="upper-box">
       <img src={cooler} alt="" />
      </div>
      <div className="lower-box">
        <h3>zeeshan</h3>
        <h4>20000</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eveniet.</p>
         <button className="btn-1">View Detail</button>
      </div>
    </div>
      
  </div>
  </>);
};

export default MidBudgetPage;
