<script>

export default {
    name: 'ScrollToTop',
    data() {
        return {
            isVisible: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Mostra il bottone quando l'utente scorre verso il basso di una certa quantità
            if (window.pageYOffset > 300) {
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        },
        scrollToTop() {
            // Scorri verso l'alto quando il bottone viene cliccato
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<template lang="">
    <div v-show="isVisible">
        <div v-if="$route.path  !== '/payment' && $route.path !== '/confirmed_payment' && $route.path !== '/payment-error'">
            <a @click="scrollToTop()"><i class="fa-solid fa-chevron-up btnUp" id="myBtn"></i></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

a {
    color: white;
    font-size: 20px;
}

.btnUp {
    padding: 13px 13px;
    border: 0.2px solid white;
    border-radius: 100%;
    background-color: #DA643F;
    position: fixed;
    bottom: 20px;
    right: 15px;
    z-index: 99;


    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    .fa-chevron-up::before {
        color: white;
        vertical-align: middle;
    }
}

@media (max-width: 768px) {
    .btnUp {
        padding: 10px 10px;
    }
}

@media (max-width: 425px) {
    .btnUp {
        padding: 7px 7px;
    }
}
</style>