import { createStore } from 'vuex'
import {productsStore} from "@/store/productsStore";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products: productsStore
  }
})
