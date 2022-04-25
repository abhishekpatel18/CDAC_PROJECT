import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import Navbar from "../src/components/Navbar/Navbar";

import ListCustomerComponent from "./components/Employee/ListCustomerComponent";
import ViewCustomerComponent from "./components/Employee/ViewCustomerComponent";
import CreateCustomerComponent from "./components/Employee/CreateCustomerComponent";
import SignUp from "./components/SignUp";
import ListMenuComponent from "./components/Menu/ListMenuComponent";
import CreateMenuComponent from "./components/Menu/CreateMenuComponent";
import ViewMenuComponent from "./components/Menu/ViewMenuComponent";
import Home from "./components/Home";
import Login from "./components/LoginForm2";
import User from "./components/User";
import Profile from "./components/Profile/Profile";
import ListOrderComponent from "./components/Order/ListOrderComponent";
import CreateOrderComponent from "./components/Order/CreateOrderComponent";
import ViewOrderComponent from "./components/Order/ViewOrderComponent";
function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/home">
              <Navbar /> <Home /> <FooterComponent />{" "}
            </Route>
            {/* // customer  */}

            <Route path="/customers" component={ListCustomerComponent}></Route>
            <Route
              path="/add-customer/:id"
              component={CreateCustomerComponent}
            ></Route>
            <Route
              path="/view-customer/:id"
              component={ViewCustomerComponent}
            ></Route>
            <Route exact path="/signup" component={SignUp}></Route>

            {/* menu */}

            <Route path="/menu" component={ListMenuComponent}></Route>
            <Route
              path="/add-menu/:foodId"
              component={CreateMenuComponent}
            ></Route>
            <Route
              path="/view-menu/:foodId"
              component={ViewMenuComponent}
            ></Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>

            <Route path='/Order' component={ListOrderComponent}></Route>
            <Route path='/add-Order/:id' component={CreateOrderComponent}></Route>
            <Route path='/view-Order/:id' component={ViewOrderComponent}></Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
