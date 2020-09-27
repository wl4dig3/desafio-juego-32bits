import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes: [
      { id: uuidv4().slice(30), nombre: 'Hulk', stock: 50, precio: 4500, color: 'green', fecha: new Date() },
      { id: uuidv4().slice(30), nombre: 'Spiderman', stock: 150, precio: 14500, color: 'red', fecha: new Date() },
      { id: uuidv4().slice(30), nombre: 'Batman', stock: 250, precio: 5500, color: 'black', fecha: new Date() },
      { id: uuidv4().slice(30), nombre: 'Superman', stock: 100, precio: 6500, color: 'gray', fecha: new Date() },
      { id: uuidv4().slice(30), nombre: 'Wonderwoman', stock: 230, precio: 5500, color: 'lightred', fecha: new Date() }, { id: uuidv4().slice(30), nombre: 'Ironman', stock: 120, precio: 7500, color: 'lightblue', fecha: new Date() },
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
    DESCONTAR(state, newJuguetes) {
      state.juguetes = newJuguetes
    },
    REGISTRO(state, newHistorial) {
      state.historialDeVentas = newHistorial
    },
  },
  actions: {
    descontar({ commit, state, dispatch }, payload) {
      let registro
      let newJuguetes = state.juguetes.map((e) => {
        if (e.id == payload.trim()) {
          e.stock--
          registro = e
        }
        return e
      })
      commit('DESCONTAR', newJuguetes)
      console.log(registro)
      dispatch('registro', registro)
    },
    registro({ commit, state }, registro) {
      registro.fecha = new Date()
      let historial = state.historialDeVentas
      historial.push(registro)
      let newHistorial = historial
      commit('REGISTRO', newHistorial)
    },
  },


})
