import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes: [
      { id: '001', nombre: 'Hulk', stock: 50, precio: 4500, color: 'green', fecha: new Date() },
      { id: '002', nombre: 'Thor', stock: 150, precio: 14500, color: 'red', fecha: new Date() },
      { id: '003', nombre: 'Capitan-America', stock: 250, precio: 5500, color: 'black', fecha: new Date() },
      { id: '004', nombre: 'Spiderman', stock: 100, precio: 6500, color: 'gray', fecha: new Date() },
      { id: '005', nombre: 'Black-Panther', stock: 230, precio: 5500, color: 'lightred', fecha: new Date() }, { id: '006', nombre: 'Ironman', stock: 120, precio: 7500, color: 'lightblue', fecha: new Date() }
    ],
    historialdeVentas: [],
  },
  getters: {
    productosConStock: (state) => {
      return state.juguetes.filter((producto) => {
        return producto.stock > 0
      })
    },
    productoDisponiblePorId: (state, getters) => (producto) => {
      return getters.productosConStock.filter((p) => p.id == producto || p.nombre.includes(producto))
    },
  },
  mutations: {
    DESCONTAR(state, payload) {
      state.juguetes = state.juguetes.map((e) => {
        if (e.nombre == payload.trim()) {
          e.stock--;
          state.historialdeVentas.push(e);
        }
        return e;
      });
    },
    // REGISTRO(state, newHistorial) {
    //   state.historialDeVentas = newHistorial
    // },
  },
  actions: {
    descontar({ commit }, payload) {
      commit('DESCONTAR', payload)
    },
  },


})
