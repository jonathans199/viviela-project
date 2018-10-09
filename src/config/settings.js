'use strict'
const _ = require('lodash')
let defaultURL = 'http://localhost:3001/api/v1/store/'
    defaultURL = 'https://api.tzuru.com/api/v1/store/'
let storeUUID = "7a9e2645-343e-4beb-bbde-d97805ed776d"


function addToLocalCart(item){
  let qty
  let currentItems    = JSON.parse(getLocalCart())
  let fetchItem       = fetchItemCart(item)
  let currentItemsNew = currentItems

  if(!fetchItem) {
    qty = 1
    currentItemsNew.push({
      uuid:item.uuid,
      qty:qty
    })
  } else {
    currentItemsNew = currentItemsNew.map((cartItem) => {
      if(cartItem.uuid === fetchItem.uuid) return {
        uuid: cartItem.uuid,
        qty: cartItem.qty + 1
      }
      return cartItem
    })
  }

  localStorage.setItem('TZcart', JSON.stringify(currentItemsNew))
}

function fetchItemCart(item){
  return _.compact(JSON.parse(getLocalCart()).map((cartItem) => {
    if (cartItem.uuid === item.uuid) return cartItem
  }))[0]
}

function createLocalCart(){
  localStorage.setItem('TZcart', JSON.stringify([]))
}

function removeLocalCart(){
  localStorage.removeItem('TZcart')
}

function getLocalCart(){
  return localStorage.getItem('TZcart')
}

module.exports = {
  addToLocalCart,
  defaultURL,
  storeUUID,
  removeLocalCart,
  createLocalCart,
  getLocalCart
}