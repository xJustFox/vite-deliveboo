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
    <a href="#header"><i class="fa-solid fa-chevron-up btnUp" id="myBtn"></i></a>
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
    margin-left: 10px;
    margin-bottom: 10px;
    position: fixed;
    bottom: 20px;
    right: 30px;
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
</style>