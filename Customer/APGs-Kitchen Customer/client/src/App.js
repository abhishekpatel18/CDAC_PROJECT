import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu/Index";
import { Navbar } from "./Components/Navbar";
import GlobalStyle from "./globalStyles";
import CartPage from "./Components/Cart/Cart";
import SignUp from "./Components/Sign Up/SignUp";
import Starter from "./Components/Product/Starter";
import Pizza from "./Components/Product/Pizza";
import User from "./Components/User";
import LeftMenu from "./Components/LeftSideMenu";
import { fetchItems } from "./Components/Product/reducers/cartReducer.js";
import store from "./index";
import Payment from "./Components/Checkout";
import WhyUs from "./Components/WhyUs/Index";
import Login from "./Components/LogIn";
import About from "./Components/AboutUs";
import Barger from "./Components/Product/Barger";
import Dessert from "./Components/Product/Dessert";
import Panner from "./Components/Product/Panner";
import Indian from "./Components/Product/Indian";
import Contact from "./Components/ContactUs";

function App() {
  useEffect(() => {
    store.dispatch(fetchItems);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <WhyUs/>
          <Menu />
          <Footer />
        </Route>
        <Route path="/menu">
          <Navbar />
          <Menu />
        </Route>
        <Route path="/cart">
          <Navbar />
          <CartPage />
        </Route>
        <Route path="/signup">
          <Navbar />
          <SignUp />
        </Route>
        <Route path="/user">
          <Navbar />
          <User />
        </Route>
        <Route path="/leftmenu">
          <Navbar />
          <LeftMenu />
          <Starter /> 
          <Pizza />
          <Panner/>
          <Barger/>
          <Indian/>
          <Dessert/>
          <Footer />
        </Route>
        <Route path="/checkout">
          <Payment />
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/about" >
          <Navbar />
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
