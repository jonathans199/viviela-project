<template>
  <div>
    <nav class="navbar__custom">
      <div id="myNav" class="overlay">
          <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
        <div class="overlay-content">
          <div class="shop_menu">
            <h2>SHOP</h2>
            <router-link to="/about">ON SALE</router-link>
            <router-link to="/about">ORIGINAL</router-link>
            <router-link to="/about">ORDER</router-link>
          </div>
          <div class="shop_menu">
            <h2>COLLECTIONS</h2>
            <router-link to="/about">CURRENT</router-link>
            <router-link to="/about">PREVIOUS</router-link>
          </div>
          <div class="shop_menu">
            <h2>PRESS</h2>
            <router-link to="/about">BLOG</router-link>
            <router-link to="/about">EVENTS</router-link>
            <router-link to="/about">MEDIA KIT</router-link>
            <router-link to="/about">FASHION SHOWS</router-link>
            <router-link to="/about">DOWNLOADS</router-link>
          </div>
          <div class="shop_menu">
            <h2>ABOUT</h2>
            <router-link to="/">LOCATION</router-link>
            <router-link to="/">ABOUT VIVIELA</router-link>
          </div>
          
        </div>
        <div class="footer-menu">
          <a href="/">INFO@VIVIELA.COM / MIAMI, FL</a>
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/profile">My Profile</router-link>
        </div>
      </div>
      
      <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="menu">
          <a class="navbar-brand" href="/"><img class="header__logo" alt="Vue logo" src="@/assets/img/viviela_logo300px.png"></a>
          <div>
          <a class="menu__button" @click="openNav()"> MENU <img src="../assets/img/menu-button.svg" alt=""></a>
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
              </li>
            </ul>
            <router-link tag="button" to="/checkout" class="navbar__cart-button">
              CHECKOUT
            </router-link>
          </b-dropdown>
          </div>
      </div>
    </nav>
  </div>
</template>

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

    },
    
    openNav() {
      document.getElementById("myNav").style.height = "100%"
    },

    closeNav() {
      document.getElementById("myNav").style.height = "0%"
    },

    // scroll(id){
    //   let data = async() => {
    //     await helper.goToByScroll(id)
    //     await this.closeNav()
    //   }
    //   data()
    // }
  }
}
</script>

<style>

	.overlay {
    height: 0%;
    width: 100%;
    position: fixed;

    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0,0,0, 0.9) url('../assets/img/viviela-v.png') no-repeat fixed center;
    overflow-x: hidden;
    transition: 0.5s;
}

	.overlay-content {
    position: relative;
    display: flex;
    justify-content: space-around;

    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

  .overlay-content h2 {
    color: #f1f1f1;
    text-align: left;
    font-weight: 800;
  }

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 1.5rem;
    color: #f1f1f1;
    display: block;
    transition: 0.3s;

    text-align: left;
    font-weight: 400;
    letter-spacing: .5rem;
}

.overlay a:hover, .overlay a:focus {
    color: #595959;
}

.overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}

  .menu {
    display: flex;
    justify-content: space-between;
}

 .menu__button {
    cursor: pointer;
    padding-left: 2rem;
}

  .menu__button img {
    width: 1.5rem;
    margin: 0 !important;
}

  .footer-menu {
    bottom: 0;
  }
</style>
