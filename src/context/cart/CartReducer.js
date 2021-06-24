import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";



// reducer is a function that allows us to handle to update our useState
// - reducer will take an intial state
// - will recieve an action declaration
// - will look to update our state based on the desired action
// - will return our updated state
// - our reducer takes two parameters.
//    - the first is our initialstate so that we can update it accordingly
//    - the second param is the action object that gets passed into dispatch({type:'some_action', payload: some data})
const CartReducer = (state, action) => {
  switch (action.type) {
     // when a case matches, the return will update the state for us
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    // When a case matches, bind the payload to the product property in state
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;