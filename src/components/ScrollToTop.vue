<script>

export default {
    name: 'ScrollToTop',
    data() {
        return {
            mybutton: document.getElementById("myBtn")
        }
    },
    mounted() {
    },
    methods: {
        scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    },
        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
}
</script>

<template lang="">
        <i class="fa-solid fa-chevron-up btnUp" id="myBtn" @click="topFunction" ></i>
</template>

<style lang="scss" scoped>

.btnUp{
    padding: 13px 13px;
    border-radius: 100%;
    background-color: #DA643F;
    margin-left: 10px;
    margin-bottom: 20px;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    .fa-chevron-up::before{
        font-size: 25px;
        color: white;
        vertical-align: middle;
    }
}
</style>