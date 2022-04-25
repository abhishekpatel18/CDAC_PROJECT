import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css';
import './Panner.css';
import { addToCart } from '../actions/cartActions'
import MenuService from '../../services/MenuService';

class Panner extends Component {

  handleClick = (foodId) => {
    this.props.addToCart(foodId);
  }

  //Api call---------------
  constructor(props) {
    super(props)

    this.state = {
      menu: []

    }
  }

  componentDidMount() {
    MenuService.getMenuByPanner()
    .then((res) => {
      console.log("Panner-----------------")
      console.log(res.data)
      this.setState({
        menu: res.data || []
      });

    })
    .catch((err) => {
      console.log(err)
    })
  }
  //-------------------------

  render() {
   // let itemList = this.props.items.map(item => {
    let itemList = this.state.menu.map(item => {
      return (
        <div class="col" key={item.foodId}>
          <div class="box" key={item.foodId}>
            <div class="img-box">
              <img src={item.url} alt="Imag1" />
            </div>
            <div class="detail-box">
              <h5>
                {item.title}
              </h5>
              <p>{item.description}</p>
              <div class="options">
                <p><b>Price: ₹ {item.price} </b></p>
              </div>
              <div>
                <button to="/" class="buttonp" onClick={() => { this.handleClick(item.foodId) }}>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      );
    })

    return (
      <div id='panner'>
        <div class="food_section layout_padding">
          <div class="container">
            <div class="heading_container heading_center">
              <h2>Panner</h2>
            </div>
            <div class="row">
              {itemList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}
const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panner)