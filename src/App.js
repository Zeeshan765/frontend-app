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

const App = () => {
  return (

    <Router>
    <div >
      <TopMenu/>
    <Switch>

         <Route path="/" exact component={Landing} /> 
          <Route path="/login" exact component={Login} />
          <Route path="/selection" exact component={SelectionPage} />
        </Switch>
  </div>

    </Router>
    );
  
};

export default App;
