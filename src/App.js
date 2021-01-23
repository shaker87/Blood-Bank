import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Header/Header";
import DonorRegistationForm from "./Components/DonorRegistationForm/DonorRegistationForm";
import NeedBloodForm from "./Components/NeedBloodForm/NeedBloodForm";
import SearchBloodForm from "./Components/SearchBloodForm/SearchBloodForm";
import About from "./Components/About/About";
import Contact from "./Components/Home/Contact/Contact";
import ActiveDonor from "./Components/AdminDashboard/ActiveDonor/ActiveDonor";
import NeedBlood from "./Components/AdminDashboard/NeedBlood/NeedBlood";
import Review from "./Components/AdminDashboard/Review/Review";
import MakeAdmin from "./Components/AdminDashboard/MakeAdmin/MakeAdmin";
import Login from "./Components/Auth/Login";


function App() {

  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/donor-registation">
            <DonorRegistationForm></DonorRegistationForm>
          </Route>
          <Route path="/need-blood">
            <NeedBloodForm></NeedBloodForm>
          </Route>
          <Route path="/search-blood">
            <SearchBloodForm></SearchBloodForm>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/admin">
            <Login></Login>
          </Route>
          <Route path="/active-donor">
            <ActiveDonor></ActiveDonor>
          </Route>
          <Route path="/add-admin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/blood-need">
            <NeedBlood></NeedBlood>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
