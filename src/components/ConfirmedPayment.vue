<script>
import { store } from '@/store';
export default {
    name: 'ConfirmedPayment',
    data() {
        return {
            store,
        }
    },
    mounted() {
          this.loadUserData();
     },
     methods: {
          loadUserData(){
               const userData = JSON.parse(localStorage.getItem('userData'));
               this.store.userData = userData;
          }
     },
}
</script>

<template lang="">
    <div class="position">
        <div class="box">
            <div class="green-circle"></div>
            <div class="inner-box text-center">
                <div class="card_title">Transazione Riuscita</div>
                <div class="card_subtitle">Grazie per aver effettuato l'ordine e per aver usato DeliveBoo!</div>
                <div class="my-5">
                    <div class="name fw-bold fs-5">{{ this.store.userData.name}}</div>
                    <div class="email fw-bold mt-2 fs-5">{{ this.store.userData.email}}</div>
                    <div class="address fw-bold mt-2 fs-5">{{ this.store.userData.delivery_address}}</div>
                </div>
                <div class="card_subtitle mb-5">Il tuo ordine è in arrivo!</div>
                <router-link class="back-home" :to="{name: 'home'}">Torna alla home</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.position {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box {
    position: relative;
    width: 100%;
    max-width: 1020px;
    height: 640px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 3.3rem;
    box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
}

.inner-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card_title {
    font-size: 45px;
}

.card_subtitle {
    font-size: 25px;
    margin-top: 15px;
}

.green-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
}

.back-home {
    background-color: #DA643F;
    color: #fff;
    text-decoration: none;
    border-radius: 0.8rem;
    margin-bottom: 2rem;
    border: none;
    cursor: pointer;
    padding: 5px 10px;

    &:hover {
        background-color: #fff;
        color: #DA643F;
    }
}
</style>