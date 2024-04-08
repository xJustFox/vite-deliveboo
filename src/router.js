import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppContacts from './pages/AppContacts.vue';
import AppPartners from './pages/AppPartners.vue';
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
            path: '/partners',
            name: 'partners',
            component: AppPartners
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

router.beforeEach((to, from, next) => {
    if (to.name === 'credentials') {
        // Verifica se l'utente sta cercando di accedere alla pagina di inserimento dei dati della carta
        // Se l'utente sta andando alla pagina di inserimento dei dati della carta,
        // controlla se ha completato il pagamento
        if (from.name === 'payment') {
            // Se l'utente non ha completato il pagamento, impedisci la navigazione
            alert("Devi inserire i dati della carta per poter procedere al pagamento")
            next(false)
        } else {
            // Se l'utente ha completato il pagamento, permetti la navigazione alla pagina di inserimento dei dati della carta
            next()
        }
    } else {
        // Per tutte le altre rotte, permetti la navigazione
        next()
    }
});

export default router;