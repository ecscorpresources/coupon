import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/includes/Navbar/Toolbar/Toolbar";
import Footer from "./components/includes/Footer/Footer";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
