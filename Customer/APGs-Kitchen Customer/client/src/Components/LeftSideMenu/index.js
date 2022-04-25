import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "./LeftMenu.css";

const LeftMenu = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <nav id="tmSidebar" class="tm-bg-black-transparent tm-sidebar">
          <button
            class="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="tm-sidebar-sticky">
            <div class="tm-brand-box"></div>

            <ul
              id="tmMainNav"
              class="nav flex-column text-uppercase text-right tm-main-nav"
            >
              <li class="nav-item">
                <a href="#starter" class="nav-link active">
                  <span class="d-inline-block mr-3">Starter</span>
                  <span class="d-inline-block tm-white-rect"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#pizza" class="nav-link">
                  <span class="d-inline-block mr-3">Pizza</span>
                  <span class="d-inline-block tm-white-rect"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#panner" class="nav-link">
                  <span class="d-inline-block mr-3">Panner</span>
                  <span class="d-inline-block tm-white-rect"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#burger" class="nav-link">
                  <span class="d-inline-block mr-3">Burger</span>
                  <span class="d-inline-block tm-white-rect"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#indian" class="nav-link">
                  <span class="d-inline-block mr-3">Indian</span>
                  <span class="d-inline-block tm-white-rect"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#dessert" class="nav-link">
                  <span class="d-inline-block mr-3">Dessert</span>
                  <span class="d-inline-block tm-white-rect"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default LeftMenu;
