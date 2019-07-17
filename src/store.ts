import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV  !== 'production';

// @ts-ignore
export default new Vuex.Store({
  strict: debug,

  state: {
    pdfData: [Object],
  },

  mutations: {
    PDF_JSON(state, pdfData) {
      state.pdfData = pdfData;
    },
  },

  getters: {
    getJsonData: (state) => state.pdfData,
  },

  actions: {
    loadData({commit}) {
      axios
          .get('http://ds-staging.freyda.io/v1/pdfs/5d28cb51a860eb1b9b408fab/view')
          .then((r) => r.data)
          .then((pdfData) => {
            commit('PDF_JSON', pdfData);
          });
    },
  },
});
