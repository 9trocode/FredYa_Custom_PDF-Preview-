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
                            font_style: 'Calibri - Bold',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Strictly Private & Confidential ',
                                    left: 96.032,
                                    top: 1045.688,
                                    right: 263.1879,
                                    bottom: 1058.9679,
                                },
                                {
                                    text: 'For circulation to Limited Partners only ',
                                    left: 96.032,
                                    top: 1062.008,
                                    right: 314.7479,
                                    bottom: 1075.2879,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 14.039999961853027,
                            content: [
                                {
                                    text: 'Elysian Capital II LP ',
                                    left: 322.7867,
                                    top: 219.7466,
                                    right: 475.2041,
                                    bottom: 238.4666,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 14.039999961853027,
                            content: [
                                {
                                    text: 'Unaudited Quarterly Report ',
                                    left: 287.9067,
                                    top: 254.9467,
                                    right: 510.2441,
                                    bottom: 273.6666,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 14.039999961853027,
                            content: [
                                {
                                    text: '30 June 2018 ',
                                    left: 346.4667,
                                    top: 290.1466,
                                    right: 451.524,
                                    bottom: 308.8666,
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
                                    left: 96.032,
                                    top: 50.04,
                                    right: 266.548,
                                    bottom: 63.32,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Strictly Private & Confidential ',
                                    left: 96.032,
                                    top: 1045.688,
                                    right: 263.1879,
                                    bottom: 1058.9679,
                                },
                                {
                                    text: 'For circulation to Limited Partners only ',
                                    left: 96.032,
                                    top: 1062.008,
                                    right: 314.7479,
                                    bottom: 1075.2879,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri-Bold',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Key Facts ',
                                    left: 103.232,
                                    top: 130.5467,
                                    right: 157.7479,
                                    bottom: 143.8267,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'First Closing ',
                                    left: 103.232,
                                    top: 163.1866,
                                    right: 171.5079,
                                    bottom: 176.4667,
                                },
                                {
                                    text: '21 April 2015 ',
                                    left: 308.8667,
                                    top: 163.1866,
                                    right: 383.8679,
                                    bottom: 176.4667,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Final Closing ',
                                    left: 103.232,
                                    top: 195.6666,
                                    right: 173.588,
                                    bottom: 208.9466,
                                },
                                {
                                    text: '16 July 2015 ',
                                    left: 308.8667,
                                    top: 195.6666,
                                    right: 378.7479,
                                    bottom: 208.9466,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Commitment period ',
                                    left: 103.232,
                                    top: 228.1466,
                                    right: 216.3079,
                                    bottom: 241.4266,
                                },
                                {
                                    text: 'No later than 16 July 2020 ',
                                    left: 308.8667,
                                    top: 228.1466,
                                    right: 453.4946,
                                    bottom: 241.4266,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Total Commitment ',
                                    left: 103.232,
                                    top: 260.7867,
                                    right: 208.468,
                                    bottom: 274.0667,
                                },
                                {
                                    text: '£250 million 1',
                                    left: 308.8667,
                                    top: 259.6266,
                                    right: 392.3479,
                                    bottom: 274.0667,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Fund’s domicile ',
                                    left: 103.232,
                                    top: 293.2666,
                                    right: 191.028,
                                    bottom: 306.5467,
                                },
                                {
                                    text: 'England & Wales ',
                                    left: 308.8667,
                                    top: 293.2666,
                                    right: 403.3879,
                                    bottom: 306.5467,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Base Currency ',
                                    left: 103.232,
                                    top: 325.9066,
                                    right: 183.508,
                                    bottom: 339.1866,
                                },
                                {
                                    text: 'GBP ',
                                    left: 308.8667,
                                    top: 325.9066,
                                    right: 334.428,
                                    bottom: 339.1866,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Legal Form ',
                                    left: 103.232,
                                    top: 358.3867,
                                    right: 165.588,
                                    bottom: 371.6667,
                                },
                                {
                                    text: 'English Limited Partnership ',
                                    left: 308.8667,
                                    top: 358.3867,
                                    right: 459.5746,
                                    bottom: 371.6667,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 9.960000038146973,
                            content: [
                                {
                                    text: 'Term ',
                                    left: 103.232,
                                    top: 391.0666,
                                    right: 134.7133,
                                    bottom: 404.3466,
                                },
                                {
                                    // tslint:disable-next-line:max-line-length
                                    text: 'The Fund will have an initial term of ten years from the Final Closing Date.  The ',
                                    left: 308.8667,
                                    top: 391.0666,
                                    right: 731.9676,
                                    bottom: 404.3466,
                                },
                                {
                                    text: 'term may be extended for up to a maximum of two consecutive one – year ',
                                    left: 308.8667,
                                    top: 407.2266,
                                    right: 732.2256,
                                    bottom: 420.5066,
                                },
                                {
                                    text: 'periods by the Manager with prior approval of the Advisory Committee. ',
                                    left: 308.8667,
                                    top: 423.5467,
                                    right: 700.5746,
                                    bottom: 436.8267,
                                },
                            ],
                        },
                        {
                            font_style: 'Calibri',
                            font_size: 6.480000019073486,
                            content: [
                                {
                                    text: '1  Includes GP Commitment ',
                                    left: 96.032,
                                    top: 502.0667,
                                    right: 244.468,
                                    bottom: 516.5066,
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
