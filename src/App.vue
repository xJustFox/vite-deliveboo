<script>
import AppHeader from './components/AppHeader.vue';

import { store } from './store.js'

export default {
  components: {
    AppHeader
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
  <router-view></router-view>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
</style>
