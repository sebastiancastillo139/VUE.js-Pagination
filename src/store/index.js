import { createStore } from 'vuex'

export default createStore({
  state: {
    newsData: [],
    pageNumber: 1,
  },
  getters: {
    getNewsData(state) {
      return state.newsData
    },
    getTotalPages(state) {
      let totalPages = Math.ceil(state.newsData.length / 6)
      return totalPages
    },
    getPagedNewsData(state) {
      return state.pagedNewsData
    },
    getBannersData(state) {
      return state.bannersData
    },
    getPageNumber(state) {
      return state.pageNumber
    }
  },
  mutations: {
    mutateNewsData: (state, data) => {
      state.newsData = data
    },
    mutatePageNumber(state, data) {
      state.pageNumber = data
    },
  },
  actions: {
    async callNewsData({ commit }) {
      const URL = 'https://newsdata.io/api/1/news?apikey=pub_8928c482d91b860895c5178ac34568858d8b&country=ve'
      const data = await fetch(URL).then(response => response.json())
      commit('mutateNewsData', data.results)
    },
    setNewsPerPage({ commit }) {
    console.log('callNewsPerPage activado')
    let pageNumber = this.state.pageNumber
    commit('mutateNewsPerPage', pageNumber)
    },
    changePageNumber({commit}){
      let pageNumber = 2
      commit('mutatePageNumber', pageNumber);
    }
  },
})
