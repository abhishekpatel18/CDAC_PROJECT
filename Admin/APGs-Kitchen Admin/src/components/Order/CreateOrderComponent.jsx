import React, { Component } from 'react'
import OrderService from '../../services/OrderService';


class CreateOrderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //step2 

            id: this.props.match.params.id,
            email: "",
            custName: "",
            status: "",
            total:""

        }

        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeCustNameHandler = this.changeCustNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeTotalHandler = this.changeTotalHandler.bind(this);

        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
        console.log("Constructor----->", this.state.custName)
    }

    //step3
    componentDidMount() {

        //step4

        if (this.state.id === '_add') {
            return
        }
        else {
            OrderService.getOrderById(this.state.id).then((res) => {
                let Order = res.data;
                this.setState({

                    custName: Order.custName,
                    email: Order.email,
                    status: Order.status,
                    total:Order.total

                });
                console.log("componentdidMount--->", Order)
            });
        }
    }


    saveOrUpdateCustomer = (e) => {
        e.preventDefault();

        let Order = {
            custName: this.state.custName,
            status: this.state.status,
            email: this.state.email,
            total:this.state.total

        };

        console.log('Order =>' + JSON.stringify(Order));

        //step5

        if (this.state.id === '_add') {

            OrderService.createOrder(Order).then(res => {
                this.props.history.push('/Order');
            });
        }
        else {


            OrderService.updateOrder(Order, this.state.id).then(res => {
                this.props.history.push('/Order');
            });

        }
    }

    changeCustNameHandler(event) {
        this.setState({
            custName: event.target.value
        });
    }

    changeStatusHandler(event) {
        this.setState({
            status: event.target.value
        });
    }
    changeEmailHandler(event) {
        this.setState({
            email: event.target.value
        });
    }
    changeTotalHandler(event) {
        this.setState({
            total: event.target.value
        });
    }




    cancel() {
        this.props.history.push('/Order');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className='text-center'>Add Product</h3>
        }
        else {
            return <h3 className='text-center'>Update Order Status</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='container'>
                    <div className='row'>

                        <div className='card col-md-6 offset-md-3 offset-md-3 '>
                            {
                                this.getTitle()
                            }
                            <div className='card-body'>
                                <form>

                                    <div className='form-group card-body'>
                                        <label> Customer Name: </label>
                                        <input type="text" name='custName' className='form-control'
                                            value={this.state.custName} onChange={this.changeCustNameHandler} />
                                    </div>



                                    <div className='form-group card-body'>
                                        <label> Product Status: </label>
                                        <input type="text"  name='status' className='form-control'
                                            value={this.state.status} onChange={this.changeStatusHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Email: </label>
                                        <input type="text"  name='email' className='form-control'
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>

                                    <div className='form-group card-body'>
                                        <label> Total: </label>
                                        <input type="text"  name='total' className='form-control'
                                            value={this.state.total} onChange={this.changeTotalHandler} />
                                    </div>





                                    <div className='card-body'>
                                        <button className='btn btn-success' onClick={this.saveOrUpdateCustomer}>Save</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateOrderComponent