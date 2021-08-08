import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import { getRegionMap } from '../database'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    regionMap: {},
    invertedRegionMap: {}
  },
  mutations: {
    updateRegionMap (state, newMap) {
      state.regionMap = Object.assign({}, newMap)
      state.invertedRegionMap = Object.assign({}, _.invert(newMap))
    } 
  },
  actions: {
    async getRegionMap( {commit} ) {
      commit('updateRegionMap', await getRegionMap())
    }
  }
})
