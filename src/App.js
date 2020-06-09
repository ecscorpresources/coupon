import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/includes/Navbar/Toolbar/Toolbar";
import Footer from "./components/includes/Footer/Footer";
import Landing from "./components/pages/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Dashboard/ProfileForm";
import ChangePassword from "./components/Dashboard/ChangePassword";
import ProductList from "./components/ProductList";
import UploadCuopon from "./components/Dashboard/UploadCoupon";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/changepassword" component={ChangePassword} />
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/uploadcuopon" component={UploadCuopon} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
