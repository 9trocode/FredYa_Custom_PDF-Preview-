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
                                    text: 'Strictly Private & Confidential ',
                                    left: 72.02400207519531,
                                    top: 784.2659912109375,
                                    right: 197.39096069335938,
                                    bottom: 794.2259521484375,
                                },
                                {
                                    text: 'For circulation to Limited Partners only ',
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
                                    text: 'Elysian Capital II LP ',
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
                                    text: 'Unaudited Quarterly Report ',
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
                    page_dimensions: {
                        width: 595.3200073242188,
                        height: 841.9199829101562,
                        orientation: 'PORTRAIT',
                        padding_left: 72.02400207519531,
                        padding_top: 37.559967041015625,
                        padding_right: 382.68304443359375,
                        padding_bottom: 806.4659423828125,
                    },
                },
                {
                    page_number: 2,
                    page_content: [
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Elysian Capital II LP - Key Facts ',
                                    left: 72.02400207519531,
                                    top: 37.529998779296875,
                                    right: 199.9109649658203,
                                    bottom: 47.4900016784668,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Strictly Private & Confidential ',
                                    left: 72.02400207519531,
                                    top: 784.2659912109375,
                                    right: 197.39096069335938,
                                    bottom: 794.2259521484375,
                                },
                                {
                                    text: 'For circulation to Limited Partners only ',
                                    left: 72.02400207519531,
                                    top: 796.5059814453125,
                                    right: 236.0609588623047,
                                    bottom: 806.4659423828125,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Key Facts ',
                                    left: 77.42400360107422,
                                    top: 97.91000366210938,
                                    right: 118.31095886230469,
                                    bottom: 107.87000274658203,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'First Closing ',
                                    left: 77.42400360107422,
                                    top: 122.38998413085938,
                                    right: 128.63095092773438,
                                    bottom: 132.34999084472656,
                                },
                                {
                                    text: '21 April 2015 ',
                                    left: 231.64999389648438,
                                    top: 122.38998413085938,
                                    right: 287.90093994140625,
                                    bottom: 132.34999084472656,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Final Closing ',
                                    left: 77.42400360107422,
                                    top: 146.74996948242188,
                                    right: 130.1909637451172,
                                    bottom: 156.70997619628906,
                                },
                                {
                                    text: '16 July 2015 ',
                                    left: 231.64999389648438,
                                    top: 146.74996948242188,
                                    right: 284.0609436035156,
                                    bottom: 156.70997619628906,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Commitment period ',
                                    left: 77.42400360107422,
                                    top: 171.10995483398438,
                                    right: 162.23095703125,
                                    bottom: 181.06996154785156,
                                },
                                {
                                    text: 'No later than 16 July 2020 ',
                                    left: 231.64999389648438,
                                    top: 171.10995483398438,
                                    right: 340.1209411621094,
                                    bottom: 181.06996154785156,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Total Commitment ',
                                    left: 77.42400360107422,
                                    top: 195.58999633789062,
                                    right: 156.35096740722656,
                                    bottom: 205.5500030517578,
                                },
                                {
                                    text: '£250 million 1',
                                    left: 231.64999389648438,
                                    top: 194.71995544433594,
                                    right: 294.2609558105469,
                                    bottom: 205.5500030517578,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Fund’s domicile ',
                                    left: 77.42400360107422,
                                    top: 219.94998168945312,
                                    right: 143.27096557617188,
                                    bottom: 229.9099884033203,
                                },
                                {
                                    text: 'England & Wales ',
                                    left: 231.64999389648438,
                                    top: 219.94998168945312,
                                    right: 302.54095458984375,
                                    bottom: 229.9099884033203,
                                },
                            ],
                        },
                    ],
                    page_dimensions: {
                        width: 595.3200073242188,
                        height: 841.9199829101562,
                        orientation: 'PORTRAIT',
                        padding_left: 72.02400207519531,
                        padding_top: 37.529998779296875,
                        padding_right: 549.169189453125,
                        padding_bottom: 806.4659423828125,
                    },
                },
               ],
            },
            };

    // @ts-ignore
        // tslint:disable-next-line:no-shadowed-variable no-unused-expression align
    store.dispatch('ManualData', DemoJson)
        .then(next);

});

export default router;
