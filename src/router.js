import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppRestaurant from './pages/AppRestaurant.vue';
import AppContacts from './pages/AppContacts.vue';
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
            path: '/restaurants',
            name: 'restaurants',
            component: AppRestaurant
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/:catchAll(.*)',
            component: ErrorPage
        },
    ]


});

export default router;