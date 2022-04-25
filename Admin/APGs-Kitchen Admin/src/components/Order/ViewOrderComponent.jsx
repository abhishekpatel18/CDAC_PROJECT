import React, { Component } from 'react'
import OrderService from '../../services/OrderService';


class ViewOrderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Order: {}
        }
    }

    componentDidMount() {
        OrderService.getOrderById(this.state.id).then(res => {
            this.setState({
                Order: res.data
            });
        });
    }

    back() {
        this.props.history.push('/Order');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className='card col-md-6 offset-md-3' >
                    <h3 className='text-center'>View Order Details</h3>
                    <hr />
                    <div className='card-body'>
                        <div className='row'>


                        <table className='table table-borderless'>
                                    <tbody>

                                        <tr>
                                            <td>
                                                <b> Customer Name  </b>
                                            </td>
                                            <td>
                                                {this.state.Order.custName}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Mail Id  </b>
                                            </td>
                                            <td>
                                                {this.state.Order.email}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Total  </b>
                                            </td>
                                            <td>
                                                {this.state.Order.total}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <b> Status  </b>
                                            </td>
                                            <td>
                                                {this.state.Order.status}
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                            <button className='btn btn-outline-dark' onClick={this.back.bind(this)} >Back</button>
                                            </td>
                                            
                                        </tr>

                                        
                                    </tbody>
                                </table>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewOrderComponent