<template>
  <section class="contact__container">
    <div class="row">
      <div class="col-12 col-md-6">
        <img src="@/assets/img/contact.png" class="img-fluid" alt="">
      </div>
      <div class="col-12 col-md-6 contact_form"> 
        <b-row>
          <h2 class="col-12 text-center">CONTACT US</h2>
          <b-form-group class="col-6 contact__form-group"  label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="EMAIL"  type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group" label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="NAME"  type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group"  label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="PHONE" type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group" label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="CITY" type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group"  label-for="elementsAppend" >
            <b-input-group>
              <b-form-input placeholder="GIRL BOY" type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group class="col-6 contact__form-group" label-for="elementsAppend" >
            <b-input-group>
              <b-form-input  type="text" ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-row>
      </div>
    </div>
  </section>
</template>

<style>
  .contact__form-group {
    padding-left: 0px;
    padding-right: 0px;
    margin-bottom: 0px
  }
  .contact_form input {
    border-radius: 0px;
    height: 45px;
    border: 0.1px solid black
  }
  .contact_form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact__container {
    margin-bottom: 0px
  }
</style>


<script>
export default {
  name:'Contact',

  data(){
    return {
      form: {}
    }
  }
}
</script>
