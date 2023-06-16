import { createStore } from 'vuex';
import shoppingCart from './modules/shoppingCart.js';

export default createStore({
  modules: {
    shoppingCart
  }
});
