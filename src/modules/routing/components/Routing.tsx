import React from "react";
import { Switch, Route } from "react-router-dom";
import { Builder } from "views";
export const Routing: React.FC = () => {
  return (
    <Switch>
      <Route exact path={""} component={Builder} />
      <Route path="*" component={() => <div>Not found</div>} />
    </Switch>
  );
};
