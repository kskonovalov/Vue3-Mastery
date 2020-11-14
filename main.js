const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Vue3 Socks',
      description: 'Vue3 test description',
      image: './assets/images/socks_green.jpg',
      inventory: 0,
      onSale: true,
      details: [
        '50% cotton',
        '50% wool',
        '50% polyester',
        '50% fakes'
      ],
      sizes: [
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        'XXXL'
      ],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
      credits: {
        url: 'https://www.vuemastery.com/courses/intro-to-vue-3/',
        title: 'Intro to Vue 3'
      },
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    emptyCart() {
      this.cart = 0
    },
    updateImage(image) {
      this.image = image
    }
  }
})
