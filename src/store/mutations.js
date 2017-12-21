export const CART_KEY = 'sell-media-cart'
export const LIGHTBOX_KEY = 'sell-media-lightbox'

export const state = {
  cart: JSON.parse(window.localStorage.getItem(CART_KEY) || '[]'),
  lightbox: JSON.parse(window.localStorage.getItem(LIGHTBOX_KEY) || '[]'),
  title: ''
}

export const mutations = {
  addToCart (state, value) {
    state.cart.push(value)
  },

  removeFromCart (state, value) {
    state.cart.splice(state.cart.indexOf(value), 1)
  },

  deleteCart (state) {
    state.cart = JSON.parse('[]')
  },

  addToLightbox (state, value) {
    state.lightbox.push(value)
  },

  removeFromLightbox (state, value) {
    state.lightbox.splice(state.lightbox.indexOf(value), 1)
  },

  deleteLightbox (state) {
    state.lightbox = JSON.parse('[]')
  },

  changeTitle( state, value ) {
    state.title = value;
    document.title = ( state.title ? state.title + ' - ' : '' ) + sell_media.site_name;
  }
}