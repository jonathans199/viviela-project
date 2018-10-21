<template>
  <div>
    <Header/>
    <div id="carouselExampleIndicators" class="carousel slide custom-slide" data-ride="carousel">
      <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
          <div class="carousel-item active slide1"></div>
          <div class="carousel-item slide2"></div>
          <div class="carousel-item slide3"></div>
          <div class="carousel-item slide4"></div>
      </div>
    </div>

    <section class="about">
      <h1>WHAT ARE WE</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut fugit illo officia et obcaecati non!</p>
    </section>

    <section class="divider1">
    </section>

    <Shop/>
    
    <section class="teaser">
      <h1>TEASER VIVIELA</h1>
    </section>

    <section class="teaser-video">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/izQgy2OlHsg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </section>

    <!-- <section class="blog-container">
      <h1>BLOG</h1>
      <div class="blog">
        <div class="blog-post">
          <img src="../assets/img/blog-post1.jpg" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam temporibus corrupti nesciunt doloremque atque modi, earum nemo, possimus odit sit fugiat. Minima reiciendis nihil ab enim voluptas rem nisi tempora.</p>
          <a href="#">View more</a>
        </div>
        <div class="blog-post">
          <img src="../assets/img/blog-post1.jpg" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam temporibus corrupti nesciunt doloremque atque modi, earum nemo, possimus odit sit fugiat. Minima reiciendis nihil ab enim voluptas rem nisi tempora.</p>
          <a href="#">View more</a>
        </div>
        <div class="blog-post">
          <img src="../assets/img/blog-post1.jpg" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam temporibus corrupti nesciunt doloremque atque modi, earum nemo, possimus odit sit fugiat. Minima reiciendis nihil ab enim voluptas rem nisi tempora.</p>
          <a href="#">View more</a>
        </div>
        <div class="blog-post">
          <img src="../assets/img/blog-post1.jpg" alt="">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam temporibus corrupti nesciunt doloremque atque modi, earum nemo, possimus odit sit fugiat. Minima reiciendis nihil ab enim voluptas rem nisi tempora.</p>
          <a href="#">View more</a>
        </div>
      </div>
       <button class="vv-button">READ MORE</button>
      <span>INFO@VIVIELA.COM / MIAMI, FL</span>
    </section> -->

    <div class="banner3">
      <h1>FASHION TV EVENT</h1>
    </div>
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
