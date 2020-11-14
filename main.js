const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      premium: false,
      credits: {
        url: 'https://www.vuemastery.com/courses/intro-to-vue-3/',
        title: 'Intro to Vue 3'
      },
    }
  },
  methods: {
    emptyCart() {
      this.cart = 0
    },
  }
})
