import React,{useState}from 'react';
import "./LowBudgetPage.css";
import SingleLowBudget from './SingleLowBudget';
import budgetdata from "../budgetdata";
//import SingleLowBudget from "./SingleLowBudget";
const LowBudgetPage = () => {
  const[itemData,setItemData] = useState(budgetdata);
    
 
  return( 
  
    <>
  <div className='lowbudget-container'>

  { itemData.filter((data) =>
(data.category === "Low Budget")
  ).map((data, index) => (
         
    <SingleLowBudget key={index} data={data} />
  
   ))}

 
    

 


  </div>
    
    
  </>
    );
};

export default LowBudgetPage;
