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

    // tslint:disable-next-line:label-position
    const DemoJson = {
        status: 'success',
        data: {
            results: [
                {
                    page_number: 1,
                    page_content: [
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Demo Page title ',
                                    left: 72.02400207519531,
                                    top: 784.2659912109375,
                                    right: 197.39096069335938,
                                    bottom: 794.2259521484375,
                                },
                                {
                                    text: '(Demo) For circulation to Limited Partners only ',
                                    left: 72.02400207519531,
                                    top: 796.5059814453125,
                                    right: 236.0609588623047,
                                    bottom: 806.4659423828125,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 14.039999961853027,
                            content: [
                                {
                                    text: 'Elysian Capital II LP (Example) ',
                                    left: 242.08999633789062,
                                    top: 164.80996704101562,
                                    right: 356.4030456542969,
                                    bottom: 178.84996032714844,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 14.039999961853027,
                            content: [
                                {
                                    text: 'Unaudited Quarterly Report (Example)',
                                    left: 215.92999267578125,
                                    top: 191.20999145507812,
                                    right: 382.68304443359375,
                                    bottom: 205.24998474121094,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 14.039999961853027,
                            content: [
                                {
                                    text: '30 June 2018 ',
                                    left: 259.8500061035156,
                                    top: 217.60995483398438,
                                    right: 338.6430358886719,
                                    bottom: 231.6499481201172,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    };

    // @ts-ignore
    store.dispatch('ManualData', DemoJson)
        .then(next);

});

export default router;
