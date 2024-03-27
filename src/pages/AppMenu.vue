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
        getMenu(){
            axios.get(`${this.store.baseUrl}/api/menu/${this.$route.params.slug}`).then(response => {
                this.dishes = response.data.results;
            })
        }
    },

}
</script>

<template lang="">
    <div class="container-lg">
        Menù
    </div>
</template>

<style lang="scss" scoped>
    
</style>