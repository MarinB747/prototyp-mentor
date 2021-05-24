import React from "react";
import { Switch, Route } from "react-router-dom";
import { Builder, Modal, OrderDone } from "views";
export const Routing: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Builder} />
      <Route path="/modal" component={Modal} />
      <Route path="/completed" component={OrderDone} />
      <Route path="*" component={() => <div>Not found</div>} />
    </Switch>
  );
};
