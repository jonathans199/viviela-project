<template>
  <div >
    <Header/>
    <section class="container">
      <div class="col-12">
        <div class="row">
            <div class="col-md-8 order-md-1">
              <Form />
            </div>
            <div class="col-md-4 order-md-2 mb-4">
              <Cart/>
            </div>
        </div>
      </div>
    </section>
    <Footer/>

    <!-- <b-modal hide-header id="myModal" hide-footer title="Sign in or register to continue">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>

        <h3>Hello From My Modal!</h3>
        <h3>Hello From My Modal!</h3>
        <h3>Hello From My Modal!</h3>
        <h3>Hello From My Modal!</h3>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
    </b-modal> -->
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cart from './Cart'
import Form from './Form'

export default {
    name: 'Checkout',
    components: {
    Header,
    Footer,
    Form,
    Cart
  },

  data(){
    return{
      loaded: false,
      modal: false
    }
  }

  
}
</script>