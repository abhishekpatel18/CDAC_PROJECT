import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./Nav.css";
import { HiUserCircle } from "react-icons/hi";
import { connect } from 'react-redux';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  CartLogo,
  UserLogo,
} from "./Navbar.elements";
import "animate.css";

function Navbar({addedItems=[]}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo onClick={closeMobileMenu}>
              <HashLink to="/">APG's Kitchen</HashLink>
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks onClick={closeMobileMenu}>
                  <HashLink to="/">Home</HashLink>
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks onClick={closeMobileMenu}>
                  <HashLink to="/leftmenu">Menu</HashLink>
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about" onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <CartLogo>
              {
                  addedItems?.length?
                  <span class='badge badge-warning' id='lblCartCount'> {addedItems?.length}  </span>
                  :<span/>
                }
                <Link to="/cart">
                  <i>
                    <BsCart4 />
                  </i>
                </Link>
              </CartLogo>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink>
                    <Link to="/login">SIGN IN</Link>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      <Link to="/login">SIGN IN</Link>
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <UserLogo>
                <Link to="/user">
                  <HiUserCircle />
                </Link>
              </UserLogo>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
      addedItems: state.addedItems

  }
}


export default connect(mapStateToProps)(Navbar);
