import axios from 'axios'

export const state = () => ({
  dataArt: 'hsdhajshdjk'
})

export const mutations = {
  SET_DATA (state, data) {
    state.dataArt = data
  },
}

export const actions = {
  async getPesanan (store, payload) {
    console.log('action jalan')
    const res = await axios.get(this.$axios.defaults.baseURL + '/article')
    store.commit('SET_DATA', res.data)
  }
}

export const getters = () => ({
  getCurrentDataArt (state) {
    return state.dataArt
  }
})
