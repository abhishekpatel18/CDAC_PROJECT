import axios from "axios";
const MENU_API_BASE_URL = "http://localhost:8091/api/v2/menus";

class MenuService {
  getMenu() {
    return axios.get(MENU_API_BASE_URL);
  }

  createMenu(menu) {
    return axios.post(MENU_API_BASE_URL, menu);
  }

  getMenuById(foodId) {
    return axios.get(MENU_API_BASE_URL + "/" + foodId);
  }

  updateMenu(menu, foodId) {
    return axios.put(MENU_API_BASE_URL + "/" + foodId, menu);
  }

  deleteMenu(foodId) {
    return axios.delete(MENU_API_BASE_URL + "/" + foodId);
  }

  // getMenuByCategory(menu,pizza) {
  //     return axios.get(MENU_API_BASE_URL + '/' + pizza, menu);
  // }

  // Apis for retrivng menu details
  getMenuByStarter(menu) {
    return axios.post(MENU_API_BASE_URL + "/" + "starter", menu);
  }
  getMenuByPizza(menu) {
    return axios.post(MENU_API_BASE_URL + "/" + "pizza", menu);
  }
  getMenuByPanner(menu) {
    return axios.post(MENU_API_BASE_URL + "/" + "panner", menu);
  }
  getMenuByBarger(menu) {
    return axios.post(MENU_API_BASE_URL + "/" + "barger", menu);
  }
  getMenuByDessert(menu) {
    return axios.post(MENU_API_BASE_URL + "/" + "dessert", menu);
  }
  getMenuByIndian(menu) {
    return axios.post(MENU_API_BASE_URL + "/" + "indian", menu);
  }
}

export default new MenuService();
