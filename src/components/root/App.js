// db ayaklandırmak için terminalde api dosyasına gidip "npx json-server --watch dosyaadı.json" 
import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navi />
      <Dashboard />
    </Container>
  );
}

export default App;
