import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Categoria from "./pages/Categoria";
import Configuracao from "./pages/Configuracao";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/categoria" component={Categoria} />
      <Route path="/configuracao" component={Configuracao} />
      <Route path="/login" component={Configuracao} />
    </Switch>
  );
}