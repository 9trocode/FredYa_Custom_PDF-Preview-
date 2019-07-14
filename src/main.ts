import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import {mapGetters} from 'vuex';
// @ts-ignore
// import { Editor, EditorContent } from 'tiptap';


Vue.config.productionTip = true;

// Vue.use(Editor);
// Getting My Computed and others Globally to reduce import on every components
Vue.mixin({
    // tslint:disable-next-line:no-empty
    // components: {
    //     EditorContent,
    // },
    computed: {
        ...mapGetters({
            pdfJson: 'getJson',
        }),
    },
});

// Mount Vue Router, Store and others For rendering purposes to the root element #app/
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
