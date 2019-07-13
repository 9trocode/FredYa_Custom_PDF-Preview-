import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {

  if (store.state.fredyapdfJson.length === 1) {
    // tslint:disable-next-line:no-console
    store.dispatch('load_pdf_json')
        .then(next);
    }
});

export default router;
