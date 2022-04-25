import React, { Component } from 'react'
import OrderService from '../../services/OrderService';


class ListOrderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Order: []
        }
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.viewOrder = this.viewOrder.bind(this);
    }



    deleteOrder(id) {
        //rest api 
        OrderService.deleteOrder(id).then(res => {
            this.setState({
                Order: this.state.Order.filter(Order => Order.id !== id)
            });
        });
    }

    viewOrder(id) {
        this.props.history.push(`/view-Order/${id}`);
    }

    editOrder(id) {
        this.props.history.push(`/add-Order/${id}`);

    }

    componentDidMount() {
        OrderService.getOrder().then((res) => {
            console.log("listOrder----->", res.data);
            this.setState({
                Order: res.data
            });

        });

    }

    addOrder() {
        this.props.history.push('/add-Order/_add');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Order List</h2>

                <div className='row'>

                    <table className='table table-striped table-bordered'>
                        <thead>

                            <tr>
                                <th>Customer Name</th>
                                <th>Mail Id</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.Order.map(
                                    Order =>
                                        <tr key={Order.id}>
                                            <td>{Order.custName}</td>
                                            <td>{Order.email}</td>
                                            <td>{Order.total}</td>
                                            <td>{Order.status}</td>

                                            <td>
                                                <button onClick={() => this.editOrder(Order.id)} className='btn btn-outline-primary'>Update</button>
                                                <button onClick={() => this.deleteOrder(Order.id)} className='btn btn-outline-danger' style={{ marginLeft: "15px" }}>Delete</button>
                                                <button onClick={() => this.viewOrder(Order.id)} className='btn btn-outline-dark' style={{ marginLeft: "15px" }}>View</button>
                                            </td>
                                        </tr>

                                )
                            }

                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListOrderComponent