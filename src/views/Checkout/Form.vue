<template>
  <div>
    <div v-if="step === 1" class="row">
      <div class="col-6">
        <h4 class="mb-3">Create an account</h4>
        <b-form @submit="registerCustomer" >
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-user"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input 
              type="text" 
              class="form-control" 
              placeholder="Email" 
              v-model="form.email"
              autocomplete="Email"
              required />
          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input 
              type="password" 
              class="form-control" 
              placeholder="Password" 
              v-model="form.password"
              autocomplete="Password"
              required />
          </b-input-group>

          <b-input-group class="mb-4">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input 
              type="password" 
              class="form-control" 
              placeholder="Password confirmation" 
              v-model="form.password_confirmation"
              autocomplete="Password-confirmation"
              required />
          </b-input-group>

          <b-button v-if="!loading" variant="success" type="submit" >Create Account</b-button>
          <b-button v-if="loading" variant="success" class="px-4" disabled ><i class="fa fa-spinner fa-spin" />  Loading</b-button>

        </b-form>
      </div>
      <div class="col-6">
        <h4 class="mb-3">Sign In</h4>
        <i class="fa fa-users"></i>
        <b-form @submit="registerCustomer" >
          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="la la-battery-4"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input 
              type="text" 
              class="form-control" 
              placeholder="Email" 
              v-model="form.email"
              autocomplete="Email"
              required />
          </b-input-group>

          <b-input-group class="mb-3">
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input 
              type="password" 
              class="form-control" 
              placeholder="Password" 
              v-model="form.password"
              autocomplete="Password"
              required />
          </b-input-group>

          <b-button v-if="!loading" variant="warning" type="submit" >Sign in</b-button>
          <b-button v-if="loading" variant="warning" class="px-4" disabled ><i class="fa fa-spinner fa-spin" />  Loading</b-button>

        </b-form>
      </div>
    </div>

    <div v-if="step === 2">
      <!-- billing address -->
      <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate>
        <div class="row">
        <div class="col-md-6 mb-3">
            <label for="firstName">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            <div class="invalid-feedback">
            Valid first name is required.
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
            <div class="invalid-feedback">
            Valid last name is required.
            </div>
        </div>
        </div>

        <div class="mb-3">
        <label for="username">Username</label>
        <div class="input-group">
            <div class="input-group-prepend">
            <span class="input-group-text">@</span>
            </div>
            <input type="text" class="form-control" id="username" placeholder="Username" required>
            <div class="invalid-feedback" style="width: 100%;">
            Your username is required.
            </div>
        </div>
        </div>

        <div class="mb-3">
        <label for="email">Email <span class="text-muted">(Optional)</span></label>
        <input type="email" class="form-control" id="email" placeholder="you@example.com">
        <div class="invalid-feedback">
            Please enter a valid email address for shipping updates.
        </div>
        </div>

        <div class="mb-3">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
        <div class="invalid-feedback">
            Please enter your shipping address.
        </div>
        </div>

        <div class="mb-3">
        <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
        </div>

        <div class="row">
        <div class="col-md-5 mb-3">
            <label for="country">Country</label>
            <select class="custom-select d-block w-100" id="country" required>
            <option value="">Choose...</option>
            <option>United States</option>
            </select>
            <div class="invalid-feedback">
            Please select a valid country.
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <label for="state">State</label>
            <select class="custom-select d-block w-100" id="state" required>
            <option value="">Choose...</option>
            <option>California</option>
            </select>
            <div class="invalid-feedback">
            Please provide a valid state.
            </div>
        </div>
        <div class="col-md-3 mb-3">
            <label for="zip">Zip</label>
            <input type="text" class="form-control" id="zip" placeholder="" required>
            <div class="invalid-feedback">
            Zip code required.
            </div>
        </div>
        </div>
        <hr class="mb-4">
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="same-address">
        <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
        </div>
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="save-info">
        <label class="custom-control-label" for="save-info">Save this information for next time</label>
        </div>
        <hr class="mb-4">
        </form>
    </div>

    <div v-if="step === 3">
      <form>
      <h4 class="mb-3">Payment</h4>

        <div class="d-block my-3">
        <div class="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
            <label class="custom-control-label" for="credit">Credit card</label>
        </div>
        <div class="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="debit">Debit card</label>
        </div>
        <div class="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="paypal">Paypal</label>
        </div>
        </div>
        <div class="row">
        <div class="col-md-6 mb-3">
            <label for="cc-name">Name on card</label>
            <input type="text" class="form-control" id="cc-name" placeholder="" required>
            <small class="text-muted">Full name as displayed on card</small>
            <div class="invalid-feedback">
            Name on card is required
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="cc-number">Credit card number</label>
            <input type="text" class="form-control" id="cc-number" placeholder="" required>
            <div class="invalid-feedback">
            Credit card number is required
            </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
            <div class="invalid-feedback">
            Expiration date required
            </div>
        </div>
        <div class="col-md-3 mb-3">
            <label for="cc-expiration">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
            <div class="invalid-feedback">
            Security code required
            </div>
        </div>
        </div>
        <hr class="mb-4">
        <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import config from '@/config/settings'

export default {
  name: 'form',
  data(){
    return {
      step:3,
      register: false,
      form: {},
      loading: false
    }
  },

  created(){
    // find the session
    let authToken = localStorage.getItem('auth_token')
    // if not session -> modal
    if(authToken) this.step = 2
  },

  mounted(){

  },

  methods: {
    registerCustomer(evt){
      evt.preventDefault()
      this.loading = true
      axios.post(config.defaultURL + config.storeUUID + '/client/customers', this.form)
      .then(response => {
        if (response.status == 200) {
          this.loading = false
          this.$toasted.show(response.data.m, {
            position:'top-right', 
            duration: 5000,
            type: 'success',
            closeOnSwipe: true
          })
        }
      })
      .catch((error) => {
        error.response.data.map((m,index) => {
          this.$toasted.show(m, {
            position:'top-right', 
            duration: 5000,
            type: 'error',
            closeOnSwipe: true
          })
        })
        this.loading = false
      })
    }
  }
  
}
</script>
