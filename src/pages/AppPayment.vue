<script>
import AppCard from '@/components/AppCard.vue';
import PaymentTest from './PaymentTest.vue';
export default {
    name: 'AppPayment',
    components: {
        AppCard,
        PaymentTest
    }
}
</script>
<template lang="">
    <div class="app-payment">
        <!-- <AppCard/> -->
        <PaymentTest/>
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