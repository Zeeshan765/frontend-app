import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';
  import "./App.css";
import Landing from './components/Landing Page/Landing';
import Login from './components/Login/Login';
import TopMenu from './components/TopMenu/TopMenu';
import SelectionPage from './components/Selection Page/SelectionPage';
import BudgetPage from './components/Budget/BudgetPage';
import LowBudgetPage from "./components/Budget/Low Budget/LowBudgetPage";
import MidBudgetPage from './components/Budget/Mid Budget/MidBudgetPage';
import HighBudgetPage from './components/Budget/High Budget/HighBudgetPage';

const App = () => {
  return (

    <Router>
    <div >
      <TopMenu/>
    <Switch>

         <Route path="/" exact component={Landing} /> 
          <Route path="/login" exact component={Login} />
          <Route path="/selection" exact component={SelectionPage} />
          <Route path="/budget" exact component={BudgetPage} />
          <Route path="/budget/lowbudget" exact component={LowBudgetPage} />
          <Route path="/budget/midbudget" exact component={MidBudgetPage} />
          <Route path="/budget/highbudget" exact component={HighBudgetPage} />
          
        </Switch>
  </div>

    </Router>
    );
  
};

export default App;
