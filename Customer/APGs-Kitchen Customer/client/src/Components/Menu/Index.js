import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div id="menu">
      <div class="layout_paddingmenu">
        <div class="container">
          <div class="heading_container heading_center animate__animated animate__slideInDown">
            <h2>Our Menu</h2>
          </div>
          <div class="row grid justify-content-between">
            <div class="col-lg-4 mt-4 mt-lg-0">
              <Link to="/leftmenu">
                <div class=" box animate__animated animate__fadeInDown  ">
                  <div class="img-box animate__animated animate__tada">
                    <img
                      src="https://spicesnflavors.com/wp-content/uploads/2017/08/cheesy-monaco-biscuits-3-min.jpg"
                      alt="Img1"
                    />
                  </div>
                  <div class="detail-box">
                    <h5>Starter</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-lg-4 mt-4 mt-lg-0">
              <Link to="/leftmenu">
                <div class=" box animate__animated animate__fadeInLeft ">
                  <div class="img-box animate__animated animate__tada">
                    <img
                      src="https://www.whiskaffair.com/wp-content/uploads/2020/08/Kadai-Paneer-2-3.jpg"
                      alt="Img1"
                    />
                  </div>
                  <div class="detail-box">
                    <h5>Panner</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-4">
                <Link to="/leftmenu">
                  <div class="box animate__animated animate__fadeInRight  ">
                    <div class="img-box animate__animated animate__tada">
                        <img src="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" alt="Img1"/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Pizza
                      </h5>
                    </div>
                  </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-3">
              <Link to="/leftmenu">
                <div class="box animate__animated animate__fadeInDown">
                  <div class="img-box animate__animated animate__tada">
                    <img
                      src="https://pr1.nicelocal.in/550BT6mffVaUqJYpWy4xzQ/1120x700,q85/4px-BW84_n2aGZJPv2Q_uysuQlRKXWAtkzmuAfqDQITeM79WH_O0CEdiHBhA-cL4eSU8Za-I2kaccATfsIFXdenpXDieam3TKG_ReU_7hgSbZD5Na_3PKBZOMrreErE0xggiPNiO54qEtZ3-Bwm7sgMJ2ka2jOcfzHjmP1AnXUyHvMYi4T80ZJSI0XD1yZTOORa4LQeoWt_jWu9LlokM0XtT02jN15neAOoi858F37c"
                      alt="Img1"
                    />
                  </div>
                  <div class="detail-box">
                    <h5>Barger</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-4">
              <Link to="/leftmenu">
                <div class="box animate__animated animate__fadeInUp">
                    <div class="img-box animate__animated animate__tada">
                        <img src="https://theveganreview.com/wp-content/uploads/2020/08/Untitled-design-13-1-1068x713.jpg" alt="Img1"/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Indian
                      </h5>
                    </div>
                </div>
              </Link>
            </div>
            <div class="col-md-3 col-sm-4">
              <Link to="/leftmenu">
                <div class="box animate__animated animate__fadeInUp">
                    <div class="img-box animate__animated animate__tada">
                        <img src="https://www.spiceupthecurry.com/wp-content/uploads/2021/02/eggless-chocolate-mousse-3.jpg" alt="Img1"/>
                    </div>
                    <div class="detail-box">
                      <h5>
                        Dessert
                      </h5>
                    </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
