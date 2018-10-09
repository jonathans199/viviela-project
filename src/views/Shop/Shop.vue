<template>
  <section class="shop container mt-5">
    <h1>SHOP ALL</h1>
    <h2>COLLECTIONS</h2>
    <div class="shop-shoes mt-5">
      <div class="shoe" v-for="item in products">
        <img :src="item.images[0]['thumb']" alt="" class="img-fluid">
        <div class="item-name">{{ item.name }}</div>
        <div class="description">{{ item.description }}</div>
           <div class="price">${{ item.price }}</div>
        <a v-if="!loaders[item.id]" class="btn btn-primary btn-sm text-white" @click="addToLocalCart(item)">ADD TO CART</a>
        <a v-if="loaders[item.id]" class="btn btn-primary btn-sm text-white" @click="addToLocalCart(item)">Loading <i class="fa fa-spinner fa-spin" /></a>
      </div>
    </div>
    
    <button class="btn vv-button mt-5 mb-5">SEE COLLECTION</button>
  </section>
</template>


<script>
import axios from 'axios'
import config from '@/config/settings'
import { serverBus } from '@/main'

export default {
  data () {
    return{ 
			info: '',
      products: [],
      loaders: {
      }
    }
  },

  created() {
    this.getProducts()
  },

  methods: {
    addToLocalCart(item){
      this.loaders[item.id] = true
      config.addToLocalCart(item)
      setTimeout(() => {
        this.loaders[item.id] = false
        this.$toasted.show('Product added', { 
          position:'top-right', 
          duration: 5000,
          type: 'success',
          closeOnSwipe: true
        })
        serverBus.$emit('updateHeaderCart')

      }, 500)
    },

    getProducts(){
      axios
      .get(config.defaultURL + config.storeUUID + '/client/products?column=price&by=desc&publish=true&featured=true&limit=4')
      .then((response) => {
        this.products = response.data.map((x) => {
          if(x['images'].length == 0) x['images'] = [{
            thumb:'sis'
          }]
          return x
        })
      })
      .catch(function(error){
      })
    }
  }
}
</script>
