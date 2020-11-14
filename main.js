const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Vue3 Socks',
      brand: 'Mastery',
      description: 'Vue3 test description',
      selectedVariant: 0,
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
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          inventory: 50,
          onSale: false
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          inventory: 0,
          onSale: true
        },
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
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      const saleText = this.onSale ? ' is on sale!' : '';
      return this.brand + ' ' + this.product + ' ' + this.color + ' ' + saleText;
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inventory() {
      return this.variants[this.selectedVariant].inventory
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale
    },
    color() {
      return this.variants[this.selectedVariant].color
    }
  }
})
