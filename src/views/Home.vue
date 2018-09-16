<template>
  <div>
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
        <div class="carousel-item">
        <img class="d-block w-100" src="@/assets/img/slide2.jpg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
                <div class="carousel-caption__slide-num">03_</div>
                <div class="carousel-caption__slide-heading">OUMEZINE</div>
                <div class="carousel-caption__slide-sub-heading">MARCH 2018</div>
            </div>
        </div>
        <!-- <div class="carousel-item">
        <img class="d-block w-100" src="..." alt="Third slide">
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

    <section class="container intro">
        <img src="@/assets/img/intro-shoe.jpg" alt="">
        <img class="intro-logo" src="@/assets/img/viviela_logo300px.png" alt="">
    </section>

    <section class="container collection">
        <span>2018</span>
        <h1>COLLECTION</h1>
        <h2>Modern</h2>
    </section>

    <section class="divider2">
        <button class="btn outline-success divider2-btn">SEE COLLECTIONS</button>
    </section>






        <section class="shop container">
            <h1>SHOP NOW</h1>
            <h2>Subtext</h2>
            <div class="shop-shoes">
							<div v-for="item in products">
								<h5>{{ item.name }}</h5>
								<img :src="item.images[0]['thumb']" alt="" class="shoe">
								<span>{{ item.price }}</span>
								<p>{{ item.description }} {{ item.stock_status }} {{ item.</p>
								
							</div>
                
            </div>
            <button class="btn vv-button">SHOP MORE</button>
        </section>

        <section class="men-shoes">
            <div class="container men-shoes-content">
                <img class="" src="@/assets/img/viviela_logo300px.png" alt="">
                <h3>FOR MEN</h3>
                <button class="btn vv-button">SHOP MORE</button>
            </div>
        </section>

        
        <Contact/>
        <Footer/>

        
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import axios from 'axios'
import Contact from './Contact/Contact'

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    Contact
  },

  data () {
    return{ 
			info: '',
			products: [ ]

    }
  },

  created () {
      axios
      .get('https://api.tzuru.com/api/v1/store/7a9e2645-343e-4beb-bbde-d97805ed776d/client/products?column=price&by=desc&publish=true&featured=true&limit=4')
      .then((response) => {
        console.log(response)
        this.products = response.data
      })
      .catch(function(error){
        console.log(error)
      })
      // .then((response) => {
      //     console.log(response.data)
      //     this.info = response.data['bpi']['USD']['rate']
      // })
      // .catch( (error) => {  
      //   console.log(error)

      // } )
  }
}


</script>
