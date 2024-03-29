import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppContacts from './pages/AppContacts.vue';
import AppMenu from './pages/AppMenu.vue';
import AppCredentials from './pages/AppCredentials.vue';
import AppPaymentError from './components/AppPaymentError.vue';
import ErrorPage from './components/ErrorPage.vue';

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
            path: '/PaymentError',
            name: 'AppPaymentError',
            component: AppPaymentError
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'error-name',
            component: ErrorPage
        },
    ]


});

export default router;