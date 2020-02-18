import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";
import Details from "./Details";
import NotFound from "./NotFound";

class Router extends React.Component {
  render() {
    console.log();
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={() => <Home {...this.state} />} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/search/" component={Search} />
          <Route path="/details/:packageIndex" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
