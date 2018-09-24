<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar__custom">
      <a class="navbar-brand" href="#">
        <img class="header__logo" alt="Vue logo" src="@/assets/img/viviela_logo300px.png">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" >
        <ul class="navbar__custom-menu">
          <a class="nav-link" href="#">ABOUT US</a>
          <a class="nav-link" href="#">SHOP</a>
          <a class="nav-link" href="#">COLLECTIONS</a>
          <a class="nav-link" href="#">BLOG</a>
          <a class="nav-link" href="#">CONTACT US</a>
          <span>
            <b-dropdown variant="link" no-caret class="navbar__cart">
              <template slot="button-content">
                <i class="fa fa-shopping-cart" style="color:black"></i>
                <b-badge pill variant="danger">{{count}}</b-badge>
              </template>

              <ul class="navbar__cart-container">
                <li class="navbar__cart-item"  v-for="item in items">
                  <img :src="item.images[0].thumb" class="img-fluid img-thumbnail navbar__custom-item-img">
                  <span class="ml-3">
                    <div>{{item.name}}</div>
                    <div><small>{{item.qty}} x ${{item.price}} USD</small></div>
                  </span>
                  <span class="navbar__cart-close">
                    <a href="javascript:void(0)">
                      <i class="fa fa-times"></i>
                    </a>
                  </span>
                  <b-dropdown-divider></b-dropdown-divider>
                </li>
              </ul>
              <button class="navbar__cart-button">
                CHECKOUT
              </button>
            </b-dropdown>
          </span>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
  .navbar__cart-close i {
    color: #cc1b1b;
    font-size: 13px !important
  }
  .navbar__cart-close {
    margin-left: auto;
    order: 2;
  }
  .navbar__cart-button {
    background-color: #4E363F;
    cursor: pointer;
    width: 100%;
    border: 1px solid #4E363F;
    color: white;
    margin-bottom: 0px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .navbar__cart-container{ 
    overflow-y: scroll;
    height: 240px;
  }
  .navbar__cart-item{
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 0.5px solid #ececec
  }
  .navbar__cart > div{
    width: 250px;
    transform: translate3d(-205px, 35px, 0px) !important;
    font-size: 15px
  }
  .navbar__custom-item-img {
    width: 50px;
    height: 50px;
  }
  .navbar__custom i {
    font-size: 25px
  }
  .navbar__custom a {
    color: black
  }
  .navbar__custom {
    position: absolute;
    top: 20px;
    z-index: 1000;
    width: 100%;
  }
  .navbar__custom-menu { 
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    font-size: 15px
  }
</style>

<script>
import axios from 'axios'
import config from '@/config/settings'
import { serverBus } from '@/main'

export default {
  name:'menu2',

  data(){
    return{
      count: 0,
      items:[]
    }
  },

  created(){
    this.updateCart()
    serverBus.$on('updateHeaderCart', () => {
      this.updateCart()
    })
  },

  methods:{
    
    updateCart(){
      this.items = []
      let cartProducts = JSON.parse(config.getLocalCart())
          cartProducts.map((product,index) => {
            this.fetchProducts(product)
          })
    },

    fetchProducts(product){
      axios
      .get(config.defaultURL + config.storeUUID + '/client/products/' + product.uuid)
      .then((response) => {
        let item = response.data
        if(item.images.length ==  0) {
          item['images'] = [{
            thumb: '/img/default.jpg'
          }]
        }
        this.items.push({
          name:item.name,
          qty:product.qty,
          images:item.images
        })
        this.count = this.items.length
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }
}
</script>
