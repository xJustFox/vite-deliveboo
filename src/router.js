import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppContacts from './pages/AppContacts.vue';
import AppMenu from './pages/AppMenu.vue';
import AppCredentials from './pages/AppCredentials.vue';
import AppPayment from './pages/AppPayment.vue';
import AppPaymentError from './components/AppPaymentError.vue';
import ErrorPage from './components/ErrorPage.vue';
import ConfirmedPayment from './components/ConfirmedPayment.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/:slug/menu',
            name: 'menu-restaurant',
            component: AppMenu
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/credentials',
            name: 'credentials',
            component: AppCredentials
        },
        {
            path: '/payment',
            name: 'payment',
            component: AppPayment
        },
        {
            path: '/payment-error',
            name: 'AppPaymentError',
            component: AppPaymentError
        },
        {
            path: '/confirmed_payment',
            name: 'confirmed_payment',
            component: ConfirmedPayment,
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'error-name',
            component: ErrorPage
        },
    ]


});

export default router;