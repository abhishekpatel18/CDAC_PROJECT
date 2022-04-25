import MenuService from "../../services/MenuService";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  FETCH_ITEMS_SUCCESS,
} from "./action-types/cart-actions";

//add cart action
export const addToCart = (foodId) => {
  console.log({ foodId });
  return {
    type: ADD_TO_CART,
    id: foodId,
  };
};
//remove item action
export const removeItem = (foodId) => {
  return {
    type: REMOVE_ITEM,
    id: foodId,
  };
};
//subtract qt action
export const subtractQuantity = (foodId) => {
  return {
    type: SUB_QUANTITY,
    id: foodId,
  };
};
//add qt action
export const addQuantity = (foodId) => {
  return {
    type: ADD_QUANTITY,
    id: foodId,
  };
};

export const fetchItemsSuccess = (items) => {
  console.log("fetchItemsSuccess", { items });
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

export const fetchItems = () => {
  console.log("in fetch items");
  MenuService.getMenu()
    .then((response) => {
      // response.data is the users
      const items = response.data;
      console.log("items in cart action", { items });
      fetchItemsSuccess(items);
    })
    .catch((error) => {
      // error.message is the error message
      //dispatch(fetchUsersFailure(error.message))
    });
};
