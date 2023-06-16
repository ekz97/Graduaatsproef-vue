const state = () => ({
  producten: []
});

const mutations = {
  ADD_PRODUCT: (state, product) => {
    const existingProduct = state.producten.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.qty += 1;
    } else {
      state.producten.push({ ...product, qty: 1 });
    }
  },
  REMOVE_PRODUCT: (state, index) => state.producten.splice(index, 1),
  INCREASE_QTY: (state, index) => state.producten[index].qty++,
  DECREASE_QTY: (state, index) => {
    if (state.producten[index].qty > 1) {
      state.producten[index].qty--;
    } else {
      state.producten.splice(index, 1);
    }
  },
  EMPTY_CART: (state) => (state.producten = [])
}

const actions = {
  addProduct: ({ commit }, product) => commit('ADD_PRODUCT', product),
  removeProduct: ({ commit }, index) => commit('REMOVE_PRODUCT', index),
  increaseQty: ({ commit }, index) => commit('INCREASE_QTY', index),
  decreaseQty: ({ commit }, index) => commit('DECREASE_QTY', index),
  emptyCart: ({ commit }) => commit('EMPTY_CART')
}

const getters = {
  shoppingCart: (state) => state.producten,
  totalProducts: (state) => state.producten.reduce((total, product) => total + product.qty, 0),
  totalPrice: (state) => state.producten.reduce((total, product) => total + product.qty * product.price, 0)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
