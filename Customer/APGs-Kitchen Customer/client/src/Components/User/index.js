import React from "react";
import "./User.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import CustomerService from "../services/CustomerService";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      address: "",
      pwd: "",
      customer: {},
      temp: [],
      seesionEmail: "",
    };

    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.LogoutHandler = this.LogoutHandler.bind(this);
  }

  componentDidMount() {
    CustomerService.getProfileId().then((res) => {
      console.log("responsee-------", res.data);
      this.setState({ temp: res.data });
      console.log("msg=", this.state.temp);
      const temp2 = Object.values(this.state.temp);

      const t = temp2.pop();

      this.setState({ seesionEmail: t });

      console.log("sessionEmail:==>", this.state.seesionEmail);

      CustomerService.getProfileData(this.state.seesionEmail).then((res) => {
        console.log("response_data-->", res.data);

        let customer2 = res.data[0];
        this.setState({
          fname: customer2.fname,
          lname: customer2.lname,
          email: customer2.email,
          mobile: customer2.mobile,
          address: customer2.address,
          pwd: customer2.pwd,
        });
      });
    });
  }

  changeFirstNameHandler(event) {
    this.setState({
      fname: event.target.value,
    });
  }

  changeLastNameHandler(event) {
    this.setState({
      lname: event.target.value,
    });
  }

  changeEmailHandler(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changeMobileHandler(event) {
    this.setState({
      mobile: event.target.value,
    });
  }

  changeAddressHandler(event) {
    this.setState({
      address: event.target.value,
    });
  }

  LogoutHandler=(e) =>{
    CustomerService.Logout().then((res) => {
      console.log("logged out user-->", res);
    
    });
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div class="card h-100 w-100">
                <div class="card-body">
                  <div class="account-settings">
                    <div class="user-profile">
                      <div class="user-avatar">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 class="user-name">
                        {this.state.fname}<br/>
                        {this.state.lname}
                      </h5>
                      <h6 class="user-email">{this.state.email}</h6>
                    </div>
                    <div class="about">
                      <h5>About</h5>
                      <p>
                        I'm, Full Stack Designer I enjoy creating
                        user-centric, delightful and human experiences.
                      </p>
                    </div>
                    <div class="about">
                      <button>Order History</button>
                    </div>
                    <div class="about">
                        <Link to="/">
                      <button
                        type="button"
                        name="logout"
                        onClick={this.LogoutHandler}
                      >
                        Log Out
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div class="card h-100">
                <div class="card-body">
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 class="mb-2 text-primary">Personal Details</h6>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="fullName">First Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                          value={this.state.fname}
                          onChange={this.changeFirstNameHandler}
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="fullName">Last Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                          value={this.state.lname}
                          onChange={this.changeLastNameHandler}
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="eMail">Email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="eMail"
                          placeholder="Enter email ID"
                          value={this.state.email}
                          onChange={this.changeEmailHandler}
                        />
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="Enter phone number"
                          value={this.state.mobile}
                          onChange={this.changeMobileHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 class="mt-3 mb-2 text-primary">Address</h6>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <label for="Street">Address</label>
                        <input
                          type="name"
                          class="form-control"
                          id="Address"
                          placeholder="Enter Street"
                          value={this.state.address}
                          onChange={this.changeAddressHandler}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
