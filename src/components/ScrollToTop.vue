<script>

export default {
    name: 'ScrollToTop',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>

<template lang="">
    <div v-if="$route.path  !== '/payment' && $route.path !== '/confirmed_payment' && $route.path !== '/payment-error'">
        <a href="#header"><i class="fa-solid fa-chevron-up btnUp" id="myBtn"></i></a>
    </div>
</template>

<style lang="scss" scoped>

a{
    color: white;
    font-size: 20px;
}

.btnUp{
    padding: 13px 13px;
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

    .fa-chevron-up::before{
        color: white;
        vertical-align: middle;
    }
}

@media (max-width: 768px) {
    .btnUp{
        padding: 10px 10px;
    }
}

@media (max-width: 425px) {
    .btnUp{
        padding: 7px 7px;
    }
}

</style>