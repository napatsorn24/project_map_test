import React, { Fragment, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { toast } from "react-toastify";

//components

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Index from "./components";
import MyMap from "./components/Map";
// Layout
import Navbar from "./components/layouts/Navbar";
import 'antd/dist/antd.css';


toast.configure();

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://tramdev.ino.nectec.or.th:5001/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>

      <Router>
      <Navbar/>
        <div className="container">
          <Switch>
            <Route
             
              exact
              path="/login"
              render={props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={props =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
            
            <Route
            
            //  BrowserRouter basename="http://203.185.67.44:3002/register"
              exact
              path="/dashboard"
              render={props =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                  
                )
              }
            /> 
            <Route
              exact
              path="/map"
              render={props =>
                isAuthenticated ? (
                  <MyMap {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                  
                )
              }
            /> 
             {/* <MyMap path="/map" to="/map" /> */}

            <Index path="/" to="/index" />

            {/* <Login path="/login" to="/login" /> */}
            {/* <Route path="/" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        */}
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
