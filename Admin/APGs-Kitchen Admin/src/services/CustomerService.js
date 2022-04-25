import axios from "axios";

const Customer_API_BASE_URL = "http://localhost:8091/api/customer";
const Customer_API_BASE_URL2 = "http://localhost:8091/api/profile";

class CustomerService {


    createCustomer(customer) {
        return axios.post(Customer_API_BASE_URL, customer);
    }

    getCustomer() {
        return axios.get(Customer_API_BASE_URL);
    }

    getCustomerById(customerId) {
        return axios.get(Customer_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customer, customerId) {
        return axios.put(Customer_API_BASE_URL + '/' + customerId, customer)
    }

    deleteCustomer(customerId) {
        return axios.delete(Customer_API_BASE_URL + '/' + customerId);
    }
    Login(customer) {
        return axios.post("http://localhost:8091/api/login", customer,{ withCredentials: true });
    }

    getProfileId() {
        return axios.get("http://localhost:8091/api/profile",{ withCredentials: true });
    }

    getProfileData(custom) {

        console.log("custome-->",custom)
        return axios.get(Customer_API_BASE_URL2 + "/"+ custom,{ withCredentials: true });
       
    }
    Logout()
    {
        return axios.post("http://localhost:8091/api/logout",{ withCredentials: true });
    }


}

export default new CustomerService()