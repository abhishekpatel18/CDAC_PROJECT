import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import "animate.css";

const Home = () => {
  return (
    <div id="home">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block"
            width="1810"
            height="700"
            src="https://images.pexels.com/photos/5695945/pexels-photo-5695945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3 className='text-primary mb-4'>First slide label</h3>
      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <div id="hero">
              <div class="carousel-container">
                <div class="carousel-content ">
                  <h2 class="animate__animated animate__fadeInDown ">
                    <span>APGs</span> Kitchen
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    Bringing good food into your everyday. That's our mission.
                    That means we don't just deliver--we bring it, always going
                    the extra mile to make your experience memorable.
                  </p>
                  <div>
                    <a
                      href="/leftmenu"
                      class="btn-menu animate__animated animate__fadeInUp scrollto"
                    >
                      Our Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block"
            width="1810"
            height="700"
            src="https://images.pexels.com/photos/271458/pexels-photo-271458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div id="hero">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">
                    <span>APGs</span> Kitchen
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    Bringing good food into your everyday. That's our mission.
                    That means we don't just deliver--we bring it, always going
                    the extra mile to make your experience memorable.
                  </p>
                  <div>
                    <a
                      href="/leftmenu"
                      class="btn-menu animate__animated animate__fadeInUp scrollto"
                    >
                      Our Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block"
            width="1810"
            height="700"
            src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div id="hero">
              <div class="carousel-container">
                <div class="carousel-content">
                  <h2 class="animate__animated animate__fadeInDown">
                    <span>APGs</span> Kitchen
                  </h2>
                  <p class="animate__animated animate__fadeInUp">
                    Bringing good food into your everyday. That's our mission.
                    That means we don't just deliver--we bring it, always going
                    the extra mile to make your experience memorable.
                  </p>
                  <div>
                    <a
                      href="leftmenu"
                      class="btn-menu animate__animated animate__fadeInUp scrollto"
                    >
                      Our Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
