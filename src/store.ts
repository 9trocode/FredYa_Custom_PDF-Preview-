import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import any = jasmine.any;

Vue.use(Vuex);

const debug = process.env.NODE_ENV  !== 'production';

// @ts-ignore
export default new Vuex.Store({
  strict: debug,

  state: {
    fredyapdfJson: [Object],
  },

  mutations: {
    PDF_JSON(state, fredyapdfJson) {
      state.fredyapdfJson = fredyapdfJson;
    },
  },

  getters: {
    getJson: (state) => state.fredyapdfJson,
  },

  actions: {
    load_pdf_json({ commit }) {
      axios
          .get('http://ds-staging.freyda.io/v1/pdfs/5d2512ce79b9696418af9e2d')
          .then((r) => r.data)
          .then((fredyapdfJson) => {
            commit('PDF_JSON', fredyapdfJson);
          });
    },
  },
});
