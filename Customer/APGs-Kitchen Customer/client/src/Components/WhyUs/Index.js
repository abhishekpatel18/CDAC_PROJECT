import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div>
      <section id="why-us" class="why-us">
        <div class="container">
          <div class="section-title">
            <h2>
              Why choose <span>Our Restaurant</span>
            </h2>
            <p>
              Our food is made fresh every day with ingredients. We bring the
              best taste in our cooking to make your day happier and healthier.
              No matter which season is going on but giving you extraordinary is
              a part of our service.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div class="box">
                <span>01</span>
                <h4>Our Mission and Values</h4>
                <p>
                  Our mission is to make delicious feel-good moments easy for
                  everyone.A commitment to a set of core values that define who
                  we are and how we run our business and restaurants.
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box">
                <span>02</span>
                <h4>Food Safety</h4>
                <p>
                  Providing safe food is our number one priority and a
                  responsibility that we take seriously.We integrate it into
                  every aspect of our operations – from food sourcing and menu
                  development to packaging, distribution
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box">
                <span>03</span>
                <h4> Natural, not artificial</h4>
                <p>
                  All dishes are crafted using natural ingredients so that each
                  dish is absolutely free of artificial flavor, synthetic
                  essence or imitation color.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhyUs;
