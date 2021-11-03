// db ayaklandırmak için terminalde api dosyasına gidip "npx json-server --watch dosyaadı.json" 
import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product" component={Dashboard} />
        <Route path="/cart" component={CartDetail} />
      </Switch>
    </Container>
  );
}

export default App;
