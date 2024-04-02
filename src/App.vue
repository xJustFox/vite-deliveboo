<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import ScrollToTop from './components/ScrollToTop.vue'

import { store } from './store.js'

export default {
  components: {
    AppHeader,
    ScrollToTop,
    AppFooter,
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
  <AppFooter />
  <ScrollToTop />
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;

  .main{
    min-height: 100vh;
  }

</style>
