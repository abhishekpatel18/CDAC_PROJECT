import MenuService from "../../services/MenuService";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  FETCH_ITEMS_SUCCESS,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === FETCH_ITEMS_SUCCESS) {
    console.log("data", action.payload);
    return {
      ...state,
      items: action.payload,
    };
  }

  console.log("--------->", state.items);

  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    console.log({ action, 1: state.items });
    let addedItem = state.items.find((item) => item.foodId === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(
      (item) => action.id === item.foodId
    );
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(
      (item) => action.id === item.foodId
    );
    let new_items = state.addedItems.filter(
      (item) => action.id !== item.foodId
    );

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.foodId === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.foodId === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(
        (item) => item.foodId !== action.id
      );
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;

export const fetchItems = (dispatch, getState) => {
  MenuService.getMenu()
    .then((response) => {
      // response.data is the users
      const items = response.data;
      console.log("items in cart action", { items });
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        payload: items,
      });
    })
    .catch((error) => {
      // error.message is the error message
      //dispatch(fetchUsersFailure(error.message))
    });
};
