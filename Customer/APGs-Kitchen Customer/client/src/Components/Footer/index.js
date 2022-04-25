import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  const divStyle = {
    background: "#35322d",
  };
  const div1Style = {
    background: "#35322d",
  };
  return (
    <div>
      <footer class="text-center text-white" style={divStyle}>
        <div class="container">
          <section class="mt-0">
            <div class="row text-center d-flex justify-content-center pt-5 h-25">
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/about" class="text-white text-decoration-none">
                    About us
                  </a>
                </h6>
              </div>
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/leftmenu" class="text-white text-decoration-none">
                    Menu
                  </a>
                </h6>
              </div>
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/contact" class="text-white text-decoration-none">
                    Contact
                  </a>
                </h6>
              </div>
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="/login" class="text-white text-decoration-none">
                    Sign In
                  </a>
                </h6>
              </div>
            </div>
          </section>
          <hr class="my-5" />
          <section class="mb-5 ml-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <p>
                  Our food is made fresh every day with ingredients. We bring
                  the best taste in our cooking to make your day happier and
                  healthier. No matter which season is going on but giving you
                  extraordinary is a part of our service.
                </p>
              </div>
            </div>
          </section>
          <section class="text-center mb-5">
            <a href="/" class="text-white me-4">
              <i>
                <BsFacebook />
              </i>
            </a>
            <a href="/" class="text-white me-4">
              <i>
                <BsInstagram />
              </i>
            </a>
            <a href="/" class="text-white me-4">
              <i>
                <BsTwitter />
              </i>
            </a>
            <a href="/" class="text-white me-4">
              <i>
                <BsYoutube />
              </i>
            </a>
            <a href="/" class="text-white me-4">
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div class="text-center p-3" style={div1Style}></div>
      </footer>
    </div>
  );
};
export default Footer;
