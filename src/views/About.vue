<template>
<div>
  <Header/>
    <div class="about">
      <h1>This is an about page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ut blanditiis fuga voluptatum voluptates libero magnam enim. Officia, nemo. Ratione ullam reprehenderit excepturi voluptatibus autem accusantium, ad veritatis libero aspernatur.</p>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    name: 'Checkout',
    components: {
    Header,
    Footer
  },
}
</script>