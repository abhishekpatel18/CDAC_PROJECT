import React, { Component } from "react";

export default class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      //   <div>
      // <footer className='footer'>
      //     <span className='text-muted'>All Rights Reserved @2022 APG's-Kitchen</span>
      // </footer>
      // </div>

      <div>
        <section class="">
          <footer
            class="text-center text-white"
            style={{ backgroundColor: "black" }}
          >
            <div class="container p-4 pb-0">
              <section class="">
                <p class="d-flex justify-content-center align-items-center">
                  <span class="me-3">Register for free</span>
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded"
                  >
                    Sign up!
                  </button>
                </p>
              </section>
            </div>

            <div class="text-center p-3" style={{ backgroundColor: "black" }}>
              All Rights Reserved @2022 APG's-Kitchen
            </div>
          </footer>
        </section>
      </div>
    );
  }
}
