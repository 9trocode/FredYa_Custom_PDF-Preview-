import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import Home from '@/views/Home.vue';

Vue.use(Router);

function loadSplit(view: string) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}


export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: loadSplit('Home'),
    },
  ],
});

router.beforeEach((to, from, next) => {

  if (store.state.pdfData.length === 1) {
    // tslint:disable-next-line:no-console
    store.dispatch('loadData')
        .then(next);
    }
  // tslint:disable-next-line:no-console
  console.log('e no work');
});

export default router;
