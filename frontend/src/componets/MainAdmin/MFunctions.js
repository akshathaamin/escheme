import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowCompany from "./ShowCompany";
import ShowStudent from "./ShowStudent";

function App() {
  return (
    <Router>
      <div className="">
        <MainNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/main/Home"} component={MainHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={"/main/ShowCompany"} component={ShowCompany} />
          <Route path={"/main/ShowStudent"} component={ShowStudent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
