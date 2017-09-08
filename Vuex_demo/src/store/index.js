/**
 * Created by xiaogao on 2017/9/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)
export  default new Vuex.Store({
  state:{count:11},
  actions,
  getters,
  mutations:{},
  modules:{products:products,cart:cart},
})
