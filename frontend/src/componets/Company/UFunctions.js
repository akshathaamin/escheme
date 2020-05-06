import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompanyHome from "./CompanyHome";
// import fRegistration from "./Registration";
import CompanyNavbar from "./CompanyNavbar";


function App() {
  return (
    <Router>
      <div className="">
        <CompanyNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/user/Home"} component={CompanyHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
