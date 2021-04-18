import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddService from "./Components/admin/AddService/AddService";
import Admin from "./Components/admin/Admin/Admin";
import Booking from "./Components/admin/Booking/Booking";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/admin/serviceId/:id">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route  path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
