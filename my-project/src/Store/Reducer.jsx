
import { ADD_TO_CART, REMOVE_FROM_CART } from './Actions';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 100, image: 'https://buy.budli.in/cdn/shop/files/Untitleddesign-2024-08-10T162148.243.jpg?v=1723287126' }, 
    { id: 2, name: 'Product 2', price: 200, image: 'https://buyblynk.com/cdn/shop/products/Untitled-1_a63943c1-5bae-4dd2-ab8a-231df1f4b4be_large.png?v=1673069206' }, 
    { id: 3, name: 'Product 3', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8aX7rx3aBCw9rrFgVdXp09AkjoBOGda9VA&s' }, 
    { id: 4, name: 'Product 4', price: 800, image: 'https://ourdeal.co.uk/wp-content/uploads/2023/07/What-Are-the-Disadvantages-of-Refurbished-Mobile-Phones.jpg' }, 
  ],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
      
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;

