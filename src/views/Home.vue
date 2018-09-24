<template>
  <div>
    <!-- home page starts  -->
    <Header/>
    <div id="carouselExampleIndicators" class="carousel slide custom-slide" data-ride="carousel">
      <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
          <div class="carousel-item active">
          <img class="d-block w-100" src="@/assets/img/slide1.jpg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
                  <div class="carousel-caption__slide-num">02_</div>
                  <div class="carousel-caption__slide-heading">OUMEZINE</div>
                  <div class="carousel-caption__slide-sub-heading">MARCH 2018</div>
              </div>
          </div>
          <!-- <div class="carousel-item">
          <img class="d-block w-100" src="@/assets/img/slide2.jpg" alt="Second slide">
          <div class="carousel-caption d-none d-md-block">
                  <div class="carousel-caption__slide-num">03_</div>
                  <div class="carousel-caption__slide-heading">OUMEZINE</div>
                  <div class="carousel-caption__slide-sub-heading">MARCH 2018</div>
              </div>
          </div> -->

      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- home page finish -->
    <Shop/>

    <!-- <section class="men-shoes">
      <div class="container men-shoes-content">
        <img class="" src="@/assets/img/viviela_logo300px.png" alt="">
        <h3>FOR MEN</h3>
        <button class="btn vv-button">SHOP MORE</button>
      </div>
    </section> -->

    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Shop from '@/views/Shop/Shop'
import Contact from '@/views/Contact/Contact'
import config from '@/config/settings'

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    Contact,
    Shop
  },
  

}


</script>
