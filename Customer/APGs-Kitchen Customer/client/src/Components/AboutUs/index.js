import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div class="layout_padding2">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>About Us</h2>
          </div>
          <div class="row grid justify-content-between">
            <img
              src="https://wallpaperaccess.com/full/271686.jpg"
              width="100"
              height="500"
              alt="img1"
            />
            <h5>
              Our technology platform connects customers, restaurant partners
              and delivery partners, serving their multiple needs. Customers use
              our platform to search and discover restaurants, read and write
              customer generated reviews and view and upload photos, order food
              delivery, book a table and make payments while dining-out at
              restaurants. On the other hand, we provide restaurant partners
              with industry-specific marketing tools which enable them to engage
              and acquire customers to grow their business while also providing
              a reliable and efficient last mile delivery service. We also
              operate a one-stop procurement solution, Hyperpure, which supplies
              high quality ingredients and kitchen products to restaurant
              partners. We also provide our delivery partners with transparent
              and flexible earning opportunities.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
