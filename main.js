const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
      credits: {
        url: 'https://www.vuemastery.com/courses/intro-to-vue-3/',
        title: 'Intro to Vue 3'
      },
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    emptyCart() {
      this.cart = []
    },
  }
})
