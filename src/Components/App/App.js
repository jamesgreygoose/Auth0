import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Info from "../Info/index";
import LogOut from "../Logout/index";
import LogIn from "../Login/index";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/logout">
            <LogOut />
          </Route>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
