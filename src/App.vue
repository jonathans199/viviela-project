<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@import '@/../assets/css/main.scss';


</style>

<script>
import Vue from 'vue'
import Toasted from 'vue-toasted'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/line-awesome/css/line-awesome-font-awesome.min.css'

import config from '@/config/settings'

Vue.use(BootstrapVue)
Vue.use(Toasted)

export default {
  created(){
    this.setCart()
  },

  methods:{
    setCart(){
      if (config.getLocalCart() === null) {
        config.createLocalCart()
      }
    }
  }
}

</script>