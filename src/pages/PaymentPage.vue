<script>
import AppCard from '../components/AppCard.vue';
import { store } from '../store.js';

export default {
    name: 'PaymentPage',
    data() {
        return {
            store,
        }
    },
    components: {
        AppCard,
    },
    computed() {
        this.getData()
    },
    methods: {
        getCvc() {
            if (store.userCvc.length == 0) {
                store.cvc = '000';
            }
            else {
                let newCvc = store.cvc.slice(store.userCvc.length, store.cvc.length);

                store.cvc = `${store.userCvc}${newCvc}`
            }
        },

        getData(base, search, type) {

            if (search.length == 0) {
                switch (type) {
                    case 'name':

                        store.name = 'JANE APPLESEED';
                        break;
                    case 'number':

                        store.number = '0000 0000 0000 0000';
                        break;
                    case 'cvc':

                        store.cvc = '000';
                        break;
                    case 'month':

                        store.month = '00';
                        break;
                    case 'year':

                        store.year = '00';
                        break;

                    default:
                        break;
                }
            }
            else {
                let newText = base.slice(search.length, base.length);

                console.log(newText);

                base = `${search}${newText}`

                switch (type) {
                    case 'name':

                        store.name = `${search}${newText}`
                        break;
                    case 'number':

                        store.number = `${search}${newText}`
                        break;
                    case 'cvc':

                        store.cvc = `${search}${newText}`
                        break;
                    case 'month':

                        store.month = `${search}${newText}`
                        break;
                    case 'year':

                        store.year = `${search}${newText}`
                        break;

                    default:
                        break;
                }
            }
        }
    },

}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="box my-5">

                    <AppCard />

                    <div id="payment_section">
                        <div
                            class="col-12 col-lg-8 p-0 px-lg-4 px-xl-0 d-flex justify-content-center align-items-lg-center justify-content-lg-end justify-content-xl-center">
                            <div class="contentForm">
                                <div>
                                    <div class="row g-3">

                                        <!-- Name Card User -->
                                        <div class="col-12">
                                            <label for="cardName" class="form-label">CARDHOLDER NAME</label>
                                            <input type="text" class="form-control" id="cardName"
                                                placeholder="e/g. Jane Appleseed" v-model="store.userName"
                                                @keyup="getData(store.name, store.userName, 'name')">
                                        </div>

                                        <!-- Card Number -->
                                        <div class="col-12">
                                            <label for="cardNum" class="form-label">CARD NUMBER</label>
                                            <input type="text" class="form-control" id="cardNum"
                                                placeholder="e/g. 1234 5678 9123 0000" v-model="store.userNumber"
                                                @keyup="getData(store.number, store.userNumber, 'number')">
                                        </div>

                                        <!-- Card Month -->
                                        <div class="col-3">
                                            <label for="cardDate" class="form-label">EXP. DATE</label>
                                            <input type="text" class="form-control" id="cardDate" placeholder="MM"
                                                maxlength="2" v-model="store.userMonth"
                                                @keyup="getData(store.month, store.userMonth, 'month')">
                                        </div>

                                        <!-- Card Year -->
                                        <div class="col-3">
                                            <label for="cardYear" class="form-label">(MM/YY)</label>
                                            <input type="text" class="form-control" id="cardYear" placeholder="YY"
                                                maxlength="2" v-model="store.userYear"
                                                @keyup="getData(store.year, store.userYear, 'year')">
                                        </div>

                                        <!-- Card CVC -->
                                        <div class="col-6">
                                            <label for="cardCvc" class="form-label">CVC</label>
                                            <input type="text" id="cardCvc" class="form-control" placeholder="e/g. 123"
                                                maxlength="3" v-model="store.userCvc"
                                                @keyup="getData(store.cvc, store.userCvc, 'cvc')">
                                        </div>

                                        <div class="col-12">
                                            <div class="my-btn">Confirm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.box {
    width: 100%;
    height: 640px;
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 3.3rem;
    box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
}

.contentForm {
    width: 360px;
    padding-top: 120px;

    .my-btn {
        margin-top: 20px;
        text-align: center;
        color: white;
        padding: 15px;
        border-radius: 10px;
        font-weight: 600;


        &:hover {
            cursor: pointer;
        }
    }
}
</style>