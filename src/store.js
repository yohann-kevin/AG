import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminToken: null,
    adminConnected: false,
    adminData: null,
    homeModelData: null,
    modelId: null,
    agentToken: null,
    agentConnected: false,
    agentData: null
  },
  mutations: {
    adminToken: (state, token) => {
      state.adminToken = token;
    },
    adminConnected: (state, isConnected) => {
      state.adminConnected = isConnected;
    },
    adminData: (state, data) => {
      state.adminData = data;
    },
    homeModelData: (state, data) => {
      state.homeModelData = data;
    },
    modelId: (state, data) => {
      state.modelId = data;
    },
    agentToken: (state, token) => {
      state.agentToken = token;
    },
    agentConnected: (state, isConnected) => {
      state.agentConnected = isConnected;
    },
    agentData: (state, data) => {
      state.agentData = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
