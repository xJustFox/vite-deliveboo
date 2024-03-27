<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'AppMenu',
    data() {
        return {
            store,
            dishes: [],
        }
    },
    created() {
        this.getMenu();
    },
    methods: {
        getMenu() {
            axios.get(`${this.store.baseUrl}/api/menu/${this.$route.params.slug}`).then(response => {
                this.dishes = response.data.results;
            })
        },
        getImage() {
            let image;
            if (this.dishes.image != null) {
                image = `${this.store.baseUrl}/storage/${this.dishes.image}`;
            }
            else {
                image = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';
            }

            return image;
        }
    },

}
</script>

<template lang="">
    <div class="container-lg mb-2">
        <div class="row">
            <div class="col-12">
                <h2 class="super-ocean">Menù</h2>
            </div>
            <div class="col-12 col-md-4 col-lg-3 my-2" v-for="dish in dishes" :key="dish.id">
                <div class="card h-100">
                    <div>
                        <div v-if="dish.image != null" class="text-center">
                            <img :src="dish.image" alt="">
                        </div>
                        <div class="card__title mt-5">
                            <h2>{{dish.name}}</h2>
                        </div>
                        <div class="card__subtitle mt-3">{{dish.description}}</div>
                    </div>
                    <div class="card__wrapper">
                        <div class="card__price text-center">{{dish.price}}$</div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <div class="card__counter">
                                <button class="card__btn">-</button>
                                <div class="card__counter-score">0</div>
                                <button class="card__btn card__btn-plus">+</button>
                            </div>
                            <button class="add_btn btn">Aggiungi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    --main-color: #fff;
    --bg-color: rgba(255, 255, 255, 0.05);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px;
    background: var(--bg-color);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    img {
        height: 150px;
    }

    .card__title {
        font-weight: 600;
        color: var(--main-color);
    }

    .card__subtitle {
        font-weight: 400;
        font-size: 15px;
        color: var(--main-color);
        letter-spacing: 0.5px;
    }

    .card__price {
        font-weight: 600;
        font-size: 22px;
        color: var(--main-color);
    }


    .card__counter {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
        padding: 5px;
        background: #666;
        border-radius: 50px;
    }

    .card__counter-score,
    .card__btn {
        font-weight: 600;
        font-size: 22px;
        color: var(--main-color);
    }

    .card__btn {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: none;
        background: transparent;
    }

    .card__btn-plus {
        background: var(--bg-color);
    }

    .add_btn {
        background-color: $my_orange;
        color: #fff;
        border-radius: 50px;
    }
}
</style>