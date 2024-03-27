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
    <div class="container-lg">
        <div class="row">
            <div class="col-12">
                <h2 class="super-ocean">Menù</h2>
            </div>
            <div class="col-12 col-md-4 col-lg-3 my-2" v-for="dish in dishes" :key="dish.id">
                <div class="card text-white h-100">
                    <div class="card-body my-2">
                        <div class="text-center">
                            <img :src="getImage()" alt="">
                        </div>
                        <div class="mx-4 mt-4">
                            <h5>{{dish.name}}</h5>
                            <p>{{dish.price}}$</p>
                        </div>
                        <button class="btn btn-sm">Aggiungi</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
    backdrop-filter: blur(25px);
    background-color: rgba(255, 255, 255, 0.05);

    .card-body {
        img {
            width: 200px;
        }

        button {
            background-color: $my_orange;
            color: white;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
}
</style>