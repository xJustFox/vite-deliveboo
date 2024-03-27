<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

import { store } from './store.js'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      store
    }
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>
<template lang="">
  <AppHeader/>
  <div class="main">

    <router-view></router-view>
  </div>
  <AppFooter/>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;

  .main{
    min-height: 100vh;
  }

</style>
