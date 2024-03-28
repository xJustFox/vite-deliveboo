import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppContacts from './pages/AppContacts.vue';
import AppMenu from './pages/AppMenu.vue';
import ErrorPage from './components/ErrorPage.vue';
import PaymentPage from './pages/PaymentPage.vue';

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
            path: '/payments',
            name: 'payments',
            component: PaymentPage
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'error-name',
            component: ErrorPage
        },
    ]


});

export default router;