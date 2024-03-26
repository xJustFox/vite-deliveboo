<script>
import { store } from '../../store';
import axios from 'axios';

export default {
    name: 'AppRestaurant',
    data() {
        return {
            store,
            restaurants: [],
        }
    },
    created() {
        this.getRestaurants();
    },
    methods: {
        getRestaurants(){
            axios.get(`${this.store.baseUrl}/api/restaurants`).then(response => {
                console.log(response);
                this.restaurants = response.data.results;
            })
        }
    },
}
</script>

<template>
    <div class="container-lg">
        <div class="row">
            <div class="col-3 py-3" v-for="(restaurant, index) in restaurants" :key="index">
                <div class="card">
                    <img :src="restaurant.main_image" alt="" style="height: 150px;">
                    <div>{{ restaurant.name }}</div>
                    <div>{{ restaurant.address }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>