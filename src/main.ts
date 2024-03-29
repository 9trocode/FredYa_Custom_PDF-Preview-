import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import {mapGetters} from 'vuex';


Vue.config.productionTip = true;
Vue.prototype.$apiUrl = 'My App';

// Getting My Computed and others Globally to reduce import on every components
Vue.mixin({
    computed: {
        ...mapGetters({
            pdfJson: 'getJsonData',
        }),
    },
});

// Mount Vue Router, Store and others For rendering purposes to the root element #app/
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
