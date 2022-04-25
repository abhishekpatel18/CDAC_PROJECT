import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Check.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CustomerService from "../services/CustomerService";
import OrderService from "../services/OrderService";

class Payment extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      fname: "",
      lname: "",
      email: "",
      seesionEmail:""
    }
  }

  componentDidMount(){
    CustomerService.getProfileId().then((res) => {
        console.log("string",res.data)
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
          });
        });
    })

  }


  showAlert() {
    
    let OrderStatus = {
      custName:this.state.fname.concat(this.state.lname),
      email: this.state.email,
      total: this.props.total,
      status:"Pending"
    }
    OrderService.createOrder(OrderStatus).then((res)=>{
      console.log("checkout1",OrderStatus);
    })
    console.log("checkout",OrderStatus);
   alert("Order Confirmed");

  }

  render() {
    return (
      <div>
        <main class="page payment-page">
          <section class="payment-form dark">
            <div class="container">
              <div class="block-heading">
                <h1>Payment</h1>
                <h5>{this.state.fname} {this.state.lname}</h5>
                <p>
                {this.state.email}
                </p>
              </div>
              <form>
                <div class="products">
                  <h3 class="title">Checkout</h3>
                  <div class="total">
                    Total<span class="price"> ₹ {this.props.total}</span>
                  </div>
                </div>
                <div class="card-details">
                  <h3 class="title">Cash On Delivery</h3>
                  <div class="row"> 
                  <p>If you choose cancel,you can do it within 60seconds after placing order <a class="text-danger" href="/">Cancel</a></p>
                    <div class="form-group col-sm-12">
                    <Link to="/">
                      <button type="button" class="btn btn-primary btn-block" onClick={this.showAlert.bind(this)}>
                        Proceed
                      </button>
                      </Link>
                      <Link to="/cart">
                      <button  type="button" class="btn btn-success btn-block">
                        Back
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Payment);
