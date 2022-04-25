import axios from "axios";
const Order_API_BASE_URL = "http://localhost:8091/api/v3/orders";

class OrderService {


    getOrder() {
        return axios.get(Order_API_BASE_URL);
    }

    createOrder(Order) {
        return axios.post(Order_API_BASE_URL, Order);
    }

    getOrderById(foodId) {
        return axios.get(Order_API_BASE_URL + '/' + foodId);
    }

    updateOrder(Order, foodId) {
        return axios.put(Order_API_BASE_URL + '/' + foodId, Order);
    }

    deleteOrder(foodId) {
        return axios.delete(Order_API_BASE_URL + '/' + foodId);
    }

}

export default new OrderService()