<script>
import AppCard from '@/components/AppCard.vue';
export default {
    name: 'AppPayment',
    components: {
        AppCard,
    }
}
</script>
<template lang="">
    <div class="app-payment">
        <AppCard/>
    </div>
</template>
<style lang="scss" scoped>
    .app-payment {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>