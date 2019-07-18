import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// tslint:disable-next-line:no-var-requires
require('dotenv').config();
import {mapGetters} from 'vuex';


Vue.config.productionTip = true;
// tslint:disable-next-line:no-console
console.log(process.env.Api_Endpoint);


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
